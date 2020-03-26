import { Action } from '@ngrx/store';
import { Login } from '../../model/model';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';

export class LoginAction implements Action {
  readonly type = LOGIN;
  constructor(public payload: Login) { }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) { }
}

export class LoginFailureAction implements Action {
  readonly type = LOGIN_FAILURE;
}

export type Actions = LoginAction | LoginSuccessAction | LoginFailureAction;
