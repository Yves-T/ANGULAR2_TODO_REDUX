import { ActionCreator, Action } from "redux";
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export enum VisibilityFilter  {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
}

export interface VisibilityFilterAction extends Action {
  type: string,
  payload?: {
    filter: VisibilityFilter,
  }
}

export const setVisibilityFilter: ActionCreator<VisibilityFilterAction> = (filter: VisibilityFilter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {filter},
});
