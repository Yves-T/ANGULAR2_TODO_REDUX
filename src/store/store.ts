import { createStore } from 'redux';

import { todoApp as reducer } from '../reducers/todo-reducer';

export const store = createStore(
  reducer,
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);
