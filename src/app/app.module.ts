import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppStore } from "./token";
import { store } from '../store/store';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilterComponent } from './filter/filter.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: AppStore, useValue: store}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
