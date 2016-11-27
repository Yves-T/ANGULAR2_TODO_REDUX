import { Component, OnInit, Inject } from '@angular/core';
import { VisibilityFilter, setVisibilityFilter } from "../../actions/visibility-action-creators";
import { AppState } from "../../app-state";
import { Store } from "redux";
import { AppStore } from "../token";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filters;
  filter;

  constructor(@Inject(AppStore) public store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.filter = state.filter;
  }

  ngOnInit() {
    this.filters = [
      {filter: VisibilityFilter.SHOW_ALL, description: 'Show all'},
      {filter: VisibilityFilter.SHOW_COMPLETED, description: 'Show completed'},
      {filter: VisibilityFilter.SHOW_ACTIVE, description: 'Show active'},
    ];
  }

  changeFilter(filter) {
    console.log(VisibilityFilter[filter]);
    this.store.dispatch(setVisibilityFilter(filter));
  }

}
