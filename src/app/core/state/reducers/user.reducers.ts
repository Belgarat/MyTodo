import { Action, createReducer, on } from '@ngrx/store';
import {MessageModel, UserModel} from '../models';
import * as userActions from '../actions';

export interface State {
  user: UserModel;
  message: MessageModel;
  isLogged: boolean,
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: State = {
  user: {},
  message: {type: '', value: ''},
  isLogged: false,
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const loginReducer = createReducer(
  initialState,
  on(userActions.forceLogin, (state) => {
      return {
        ...state,
        isLogged: !state.isLogged
      };
    }
  ),
  on(userActions.login, (state) => {
      return {
        ...state,
        message: {type: '', value: ''},
      };
    }
  ),
  on(userActions.loginSuccess, (state, action) => {
      return {
        ...state,
        user: action,
        isLogged: true,
        message: {type: 'Success', value: 'Login successful'}
      };
    }
  ),
  on(userActions.loginFailure, (state, action) => {
      const message = typeof(action.message) === 'string' ? action.message : 'Unknown error on login';
      return {
        ...state,
        isLogged: false,
        message: {type: 'Error', value: message}
      };
    }
  ),
);

export function reducer(state: State | undefined, action: Action): any {
  return loginReducer(state, action);
}

export const getLoggedInUser = (state: State) => {
  return {
    user: state.user,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userLogin = (state: State) => {
  return {
    user: state.user,
    message: state.message,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userSignup = (state: State) => {
  return {
    user: state.user,
    message: state.message,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};
