import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0,
};

export const reducer = createReducer(
  initialState,
  on(AppActions.increment, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(AppActions.decrement, (state) => ({
    ...state,
    counter: state.counter - 1,
  })),
  on(AppActions.reset, (state) => ({ ...state, counter: 0 }))
);
