import { Injectable } from '@angular/core';
import { Todo } from '../types/todos.types';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosPersistanceService {
  count = new Subject<number>();

  constructor() { }
  private key = 'todos';
  private save(data: Todo[]): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
  getAll(): Todo[] {
    const data = JSON.parse(localStorage.getItem(this.key) || '[]');
    this.count.next(data.length);
    return data as Todo[];
  };
  addTodo(todo: Todo): void {
    const data = this.getAll();
    data.push(todo);
    this.save(data);
    this.count.next(data.length);
  }
  getCount(): Observable<number> {
    return this.count.asObservable();
  }
  updateTodo(todo: Todo): void {
    const data = this.getAll();
    const index = data.findIndex(_todo => _todo.id === todo.id);
    data[index] = todo;
    this.save(data);


  }
  deleteTodo(todo: Todo): void {
    const data = this.getAll();
    const index = data.findIndex(_todo => _todo.id === todo.id);
    data.splice(index, 1);
    this.save(data);
    this.count.next(data.length);

  }
}
