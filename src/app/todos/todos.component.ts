import { Component, OnInit } from '@angular/core';

import type { Todo } from './todos.types';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosListComponent } from "./todos-list/todos-list.component";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, AddTodoComponent, TodosListComponent],
  providers: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  addTodoText = '';
  todosList: Todo[] = [];
  httpService: HttpClient;

  constructor(httpService: HttpClient) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.httpService.get('https://jsonplaceholder.typicode.com/todos')
    .toPromise()
      // .subscribe({
      //   // error: console.error,
      //   // complete: console.log,
      //   next: (_data: unknown) => {
      //     console.log({ _data });
      //     const data = _data as { id: number, title: string, completed: boolean }[];
      //       this.todosList = data.map(todo => {
      //         return {
      //           id: todo.id,
      //           text: todo.title,
      //           completed: todo.completed
      //         }
      //       });
      //   }
      // });

  }
  handleSubmitAddTodo(todoToBeAdded: Todo) {
    this.todosList.push(todoToBeAdded);

  }
  handleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }
  handleDelete(id: number) {
    // this.todosList = this.todosList.filter(todo => todo.id !== id);
    const index = this.todosList.findIndex(todo => todo.id === id);
    this.todosList.splice(index, 1);
  }
}
