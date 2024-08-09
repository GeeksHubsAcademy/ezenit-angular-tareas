import { Component, OnInit } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { TodosPersistanceService } from '../../services/todos-persistance.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../types/todos.types';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CapitalizePipe],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit {
  todo?: Todo;
  constructor(private persistanceService: TodosPersistanceService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    console.log('ngOnInit');

    this.activatedRoute.paramMap.subscribe(params => {
      const todos = this.persistanceService.getAll();
      this.todo = todos.find(todo => todo.id === Number(params.get('id')));

    });
  }
  handleComplete() { }
  handleDelete() { }

}
