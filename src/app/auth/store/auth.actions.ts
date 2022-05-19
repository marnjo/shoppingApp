import { Action } from '@ngrx/store'
import { User } from '../user.modal';

export const LOGIN = '[auth] login';
export const LOGOUT = '[auth] login';
export const SIGNUP = '[auth] sign up';

export class Login implements Action {
    readonly type = LOGIN;

    constructor(public payload: {email: string, password: string}) {
        console.log('action');
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

    constructor(public payload: {email: string, password: string}) {}
}

export type AuthActions = Login | Logout | SignUp;