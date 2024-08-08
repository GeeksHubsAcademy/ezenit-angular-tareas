import { Component, OnInit } from '@angular/core';

import type { Todo } from './todos.types';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosListComponent } from "./todos-list/todos-list.component";
import { TodosApiRestService } from './services/todos-api-rest.service';


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
  apiService: TodosApiRestService;
  today = new Date();
  constructor( apiService: TodosApiRestService, ) {
    this.apiService = apiService;
  }

  async ngOnInit() {
    const data = await this.apiService.getTodos()
    this.todosList = data;

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
