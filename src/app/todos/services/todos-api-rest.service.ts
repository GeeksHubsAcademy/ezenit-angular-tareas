import { Injectable } from '@angular/core';
import { Todo } from '../todos.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosApiRestService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {  }

  getTodos(): Promise<Todo[]> {

    return new Promise((resolve, reject) => {
      this.http.get(`${this.BASE_URL}/todos`)
        .subscribe({
          error: reject,
          next: (_data: unknown) => {


            const data = _data as { id: number, title: string, completed: boolean }[];
            const todos = data.map(todo => {
              return {
                id: todo.id,
                text: todo.title,
                completed: todo.completed
              }
            });

            resolve(todos);
          }
        });
    });

  }
}
