import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface State {
  cartItemCount: number;
}

export const initialState: State = {
  cartItemCount: 0,
};

export const reducer = createReducer(
  initialState,
  on(AppActions.setCartItemCount, (state, { cartItemCount }) => ({
    ...state,
    cartItemCount: cartItemCount,
  })),
  on(AppActions.reset, () => ({
    ...initialState,
  }))
);
