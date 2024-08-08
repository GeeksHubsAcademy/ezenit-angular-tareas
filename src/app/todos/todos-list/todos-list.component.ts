import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos.types';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {
  @Input() todosList: Todo[] = [];
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<number>();

  handleComplete(todo: Todo) {
    this.complete.emit(todo);
  }
  handleDelete(id: number) {
    this.delete.emit(id);
  }

}
