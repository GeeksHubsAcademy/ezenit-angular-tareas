import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos.types';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
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
