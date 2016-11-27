import { VisibilityFilter } from "./actions/visibility-action-creators";
export interface AppState {
  todos: [Todo],
  filter: VisibilityFilter
}

export interface Todo {
  title: String,
  completed: Boolean,
}
