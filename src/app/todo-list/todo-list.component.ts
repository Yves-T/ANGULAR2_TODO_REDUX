import { Component, Inject } from '@angular/core';
import { AppStore } from '../token';
import { AppState } from '../../app-state';
import { Store } from 'redux';
import { VisibilityFilter } from "../../actions/visibility-action-creators";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: any;
  activeFilter;

  constructor(@Inject(AppStore) public store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.activeFilter = state.filter;
    this.todos = this.filterTodos(this.activeFilter, state.todos);
  }

  filterTodos(filter, todos) {
    console.log('filter:', filter);
    console.log(todos);
    switch (VisibilityFilter[filter]) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    }
  }

}
