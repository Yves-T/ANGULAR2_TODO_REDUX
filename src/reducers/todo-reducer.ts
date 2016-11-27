import {
  ADD_TODO, DELETE_TODO, TOGGLE_TODO,
} from '../actions/todo-action-creators';
import { combineReducers, Reducer } from 'redux';
import { TodoAction } from '../actions/todo-action-creators'
import { Todo } from "../app-state";
import {
  VisibilityFilterAction,
  SET_VISIBILITY_FILTER,
  VisibilityFilter
} from "../actions/visibility-action-creators";


const todos: Reducer<Array<Todo>> = (state = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      let todo = action.payload.todo;
      todo.completed = false;
      return [
        todo,
        ...state,
      ];

    case DELETE_TODO: {
      let index = state.indexOf(action.payload.todo);
      let newState = [...state];
      newState.splice(index, 1);
      return newState;
    }

    case TOGGLE_TODO: {
      let index = state.indexOf(action.payload.todo);
      let newState = [...state];
      newState[index].completed = !newState[index].completed;
      return newState;
    }


    default:
      return state;
  }
};

const filter: Reducer<VisibilityFilter> = (state = VisibilityFilter.SHOW_ALL, action: VisibilityFilterAction) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export const todoApp = combineReducers({
  todos,
  filter
});

