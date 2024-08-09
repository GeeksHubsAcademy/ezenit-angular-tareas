import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../../types/todos.types';
import { Filter } from './filter.types';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], filter: Filter): Todo[] {

    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    if (filter === 'uncompleted') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;

  }

}
