import { Component } from '@angular/core';

import type { Todo } from './todos.types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  handleSubmitAddTodo() {
    const text = this.addTodoText.trim();
    if (!text) return;

    this.todosList.unshift({
      id: Date.now(),
      text: text,
      completed: false
    });
    this.addTodoText = '';
  }
}
