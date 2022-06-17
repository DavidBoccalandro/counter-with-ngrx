import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState = 0;

export const counterReducer = createReducer<number>(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);
