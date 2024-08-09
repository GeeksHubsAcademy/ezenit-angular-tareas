import { Component, OnInit } from '@angular/core';

import type { Todo } from './todos.types';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosListComponent } from "./todos-list/todos-list.component";
import { TodosApiRestService } from './services/todos-api-rest.service';
import { TodosPersistanceService } from './services/todos-persistance.service';


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
  today = new Date();
  constructor(  private persistanceService: TodosPersistanceService) {  }

  async ngOnInit() {
    const data = await this.persistanceService.getAll()
    this.todosList = data;

  }
  handleSubmitAddTodo(todoToBeAdded: Todo) {
    this.todosList.push(todoToBeAdded);
    this.persistanceService.addTodo(todoToBeAdded);

  }
  handleComplete(todo: Todo) {
    todo.completed = !todo.completed;
    this.persistanceService.updateTodo(todo);
  }
  handleDelete(id: number) {
    // this.todosList = this.todosList.filter(todo => todo.id !== id);
    const index = this.todosList.findIndex(todo => todo.id === id);
    const todoToBeDeleted = this.todosList[index];
    this.todosList.splice(index, 1);
    this.persistanceService.deleteTodo(todoToBeDeleted);
  }
}
