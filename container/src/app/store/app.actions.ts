import { createAction, props } from '@ngrx/store';

export const setCartItemCount = createAction(
  '[Container] set cart item count',
  props<{ cartItemCount: number }>()
);
export const reset = createAction('[Container] Reset');
