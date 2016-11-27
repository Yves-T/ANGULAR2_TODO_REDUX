import { Component, Inject } from '@angular/core';
import { AppState } from '../../app-state';
import { Store } from 'redux';
import { AppStore } from '../token';
import { addTodo } from '../../actions/todo-action-creators';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  constructor(@Inject(AppStore) public store: Store<AppState>) {

  }

  addTodo(title) {
    this.store.dispatch(addTodo({title}));
  }

}
