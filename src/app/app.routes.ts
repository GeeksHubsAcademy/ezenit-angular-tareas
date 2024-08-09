import { Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';


export const routes: Routes = [
  {
    path: 'all',
    component: TodosComponent
  },
  {
    path: 'todo/:id',
    component: TodoDetailComponent
  },
  {
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  }
];
