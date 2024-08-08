import { Component } from '@angular/core';

import type { Todo } from './todos.types';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  addTodoText = '';
  todosList: Todo[] = [
    {
      id: 1,
      text: 'Learn Angular',
      completed: false
    },
    {
      id: 2,
      text: 'Learn React',
      completed: false
    },
    {
      id: 3,
      text: 'Learn Vue',
      completed: false
    }
  ]
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
