import { createAction, props } from '@ngrx/store';
import { UserModel } from "../models";

export const FORCE_USER_LOGIN = '[Login Page] Force user login';
export const USER_LOGIN = '[Login Page] Login';
export const USER_LOGIN_SUCCESS = '[Login Page] Login Success';
export const USER_LOGIN_FAILURE = '[Login Page] Login Failure';

export const forceLogin = createAction(
  FORCE_USER_LOGIN
);

export const login = createAction(
  USER_LOGIN,
  props<{user: UserModel}>()
);

export const loginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<UserModel>()
)

export const loginFailure = createAction(
  USER_LOGIN_FAILURE,
  props<{message: string}>()
)
