import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todos.types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<Todo>();

  addTodoText = '';

  handleSubmit() {
    const text = this.addTodoText.trim();
    if (!text) return;

    this.addTodo.emit({
      id: Date.now(),
      text: text,
      completed: false
    });
    this.addTodoText = '';
  }
}
