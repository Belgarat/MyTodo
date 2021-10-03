import {
  ActionReducer,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromTodo from './reducers/todo.reducers';

export interface State {
  todos: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.reducer,
};

// const reducerKeys = ['todos'];

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
