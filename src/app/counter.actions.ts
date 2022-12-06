import { createAction } from '@ngrx/store';

export const increment = createAction('[The CounterComponent] - Increment');
export const decrement = createAction('[The CounterComponent] - Decrement');
export const reset = createAction('[The CounterComponent] - Reset');
