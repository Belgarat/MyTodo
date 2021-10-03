import { createAction, props } from '@ngrx/store';
import { TodoModel } from "../models";

export const LOAD_TODOS = '[Todo Page] Load todos';
export const LOAD_TODOS_SUCCESS = '[Todo Page] Load todos success';
export const LOAD_TODOS_FAILURE = '[Todo Page] Load todos failure';

export const loadTodos = createAction(
  LOAD_TODOS,
);

export const loadTodosSuccess = createAction(
  LOAD_TODOS_SUCCESS,
  props<{ todos: TodoModel[] }>()
)

export const loadTodosFailure = createAction(
  LOAD_TODOS_FAILURE,
  props<{message: string}>()
)
