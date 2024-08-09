import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TodosPersistanceService } from './services/todos-persistance.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  constructor(private todosPersistanceService: TodosPersistanceService) { }
  todosCount = 0;
  ngOnInit() {
    this.todosPersistanceService.getCount().subscribe(count => this.todosCount = count);
  }

}
