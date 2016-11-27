import {
  Action,
  ActionCreator,
} from 'redux'
import { Todo } from '../app-state';

export interface TodoAction extends Action {
  type: string,
  payload?: {
    todo?: Todo,
  }
}

export const ADD_TODO = 'GET_TODO';
export const addTodo: ActionCreator<TodoAction> = (todo: Todo) => ({
  type: ADD_TODO,
  payload: {todo},
});

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo: ActionCreator<TodoAction> = (todo: Todo) => ({
  type: DELETE_TODO,
  payload: {todo},
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo: ActionCreator<TodoAction> = (todo: Todo) => ({
  type: TOGGLE_TODO,
  payload: {todo},
});


