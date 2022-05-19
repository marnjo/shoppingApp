import { User } from '../user.modal';
import * as AuthActions from './auth.actions';

export interface State {
    user: any
}

const initialState: State = {
    user: {name: 'marnjo'}
}

export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
    switch(action.type) {
        case AuthActions.LOGIN:
            console.log('reducer');
            return {
                ...state,
            }
        case AuthActions.LOGOUT:
            console.log('logout reducer');
            return {
                ...state,
            }
        case AuthActions.SIGNUP:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}