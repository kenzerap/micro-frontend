import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectApp = createFeatureSelector<fromApp.State>('app');

export const selectCounterValue = createSelector(
  selectApp,
  (state: fromApp.State) => state.counter
);
