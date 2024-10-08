import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../types/todos.types';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CapitalizePipe, RouterLink],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo?: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<number>();

  handleComplete() {
    this.complete.emit(this.todo);
  }
  handleDelete() {
    this.delete.emit(this.todo?.id);
  }

}
