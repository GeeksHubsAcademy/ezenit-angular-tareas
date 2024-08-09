import { Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { guardWorkingDaysGuard } from './guards/guard-working-days.guard';


export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    outlet: 'nav'
  },
  {
    path: 'all',
    component: TodosComponent
  },
  {
    path: 'todo/:id',
    component: TodoDetailComponent,
    canActivate: [guardWorkingDaysGuard],
    canDeactivate: []
  },
  {
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  },

];
