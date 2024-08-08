import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos.types';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CapitalizePipe],
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
