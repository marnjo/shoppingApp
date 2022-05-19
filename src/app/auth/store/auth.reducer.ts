import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User | {};
}

const initialState: State = {
  user: {},
};

export function AuthReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: { ...action.payload },
      };
    // case AuthActions.LOGOUT:
    //   console.log('logout reducer');
    //   return {
    //     ...state,
    //   };
    // case AuthActions.SIGNUP:
    //   return {
    //     ...state,
    //   };
    default:
      return {
        ...state,
      };
  }
}
