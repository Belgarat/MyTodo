import { Action, createReducer, on } from '@ngrx/store';
import {MessageModel, TodoModel} from '../models';
import * as todoActions from '../actions';

export interface State {
  todo: TodoModel[];
  message: MessageModel;
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: State = {
  todo: [],
  message: {type: '', value: ''},
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const todoReducer = createReducer(
  initialState,
  on(todoActions.loadTodos, (state) => {
      return {
        ...state,
        message: {type: '', value: ''},
      };
    }
  ),
  on(todoActions.loadTodosSuccess, (state, action) => {
      return {
        ...state,
        todo: action.todos,
        message: {type: 'Success', value: 'Login successful'}
      };
    }
  ),
  on(todoActions.loadTodosFailure, (state, action) => {
      const message = typeof(action.message) === 'string' ? action.message : 'Unknown error on login';
      return {
        ...state,
        message: {type: 'Error', value: message}
      };
    }
  ),
);

export function reducer(state: State | undefined, action: Action): any {
  return todoReducer(state, action);
}
