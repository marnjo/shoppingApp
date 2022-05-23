import { Action } from '@ngrx/store';
import { User } from '../user.model';

export const INITIATE_LOGIN = '[auth] Initiate login';
export const LOGIN = '[auth] login';
export const LOGOUT = '[auth] logout';
export const INITIATE_SIGNUP = '[auth] Initiate sign up';
export const SIGNUP = '[auth] sign up';
export const CHECK_USER = '[auth] Check User';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: { email: string, token: string, expiresDate: Date }) {
    // console.log('action login');
  }
}

export class InitiateLogin implements Action {
  readonly type = INITIATE_LOGIN;

  constructor(public payload: { email: string; password: string }) {
    // console.log('action login');
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload: any) {}
}

export class InitiateSignUp implements Action {
  readonly type = INITIATE_SIGNUP;

  constructor(public payload: { email: string; password: string }) {}
}

export class SignUp implements Action {
  readonly type = SIGNUP;

  constructor(public payload: { email: string; password: string }) {}
}

export type AuthActions = Login | InitiateLogin| InitiateSignUp | Logout | SignUp;
