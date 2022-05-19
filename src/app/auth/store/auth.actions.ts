import { Action } from '@ngrx/store';
import { User } from '../user.model';

export const LOGIN = '[auth] login';
export const LOGIN_SUCCESS = '[auth] login success';
export const LOGOUT = '[auth] login';
export const SIGNUP = '[auth] sign up';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: { email: string; password: string }) {
    console.log('action login');
  }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: User) {
    console.log('action login success');
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload: any) {
    console.log('logout');
  }
}

export class SignUp implements Action {
  readonly type = SIGNUP;

  constructor(public payload: { email: string; password: string }) {}
}

export type AuthActions = Login | LoginSuccess | Logout | SignUp;
