import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
}

const initialState: State = {
  user: null,
};

export function AuthReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.INITIATE_LOGIN:
      return {
        ...state,
      };
    case AuthActions.LOGIN:
      console.log('login reducer');
      const user = new User(action.payload.email, action.payload.token,
                            action.payload.expiresDate);
      return {
        ...state,
        user
      };
    case AuthActions.INITIATE_SIGNUP:
      return {
        ...state,
      };
    case AuthActions.SIGNUP:
      return {
        ...state,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return {
        ...state,
      };
  }
}
