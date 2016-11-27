import { Component, Input, Inject } from '@angular/core';
import { deleteTodo, toggleTodo } from '../../actions/todo-action-creators';
import { AppState } from "../../app-state";
import { Store } from "redux";
import { AppStore } from "../token";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo;

  constructor(@Inject(AppStore) public store: Store<AppState>) {
  }

  delete() {
    this.store.dispatch(deleteTodo(this.todo));
  }

  toggle() {
    this.store.dispatch(toggleTodo(this.todo));
  }

}
