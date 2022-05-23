import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, take, tap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import * as environment from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { User } from '../user.model';
import { IResponseFirebase } from 'src/app/shared/interfaces';


@Injectable()
export class AuthEffects {
  signInUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.environment.key}`;
  signUpUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.environment.key}`;

  @Effect()
  authInitiateLogin = this.action$.pipe(
    ofType(AuthActions.INITIATE_LOGIN),
    switchMap(
      (auth: AuthActions.InitiateLogin) => {
        // console.log(auth);
        return this.http.post(
          this.signInUrl,
          {
            email: auth.payload.email,
            password: auth.payload.password,
            returnSecureToken: true
          }
        ).pipe(
          map(
            (resData: IResponseFirebase) => {
              // const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
              const expirationDate = new Date(new Date().getTime() + 10 * 1000);
              return new AuthActions.Login({
                email: resData.email,
                token: resData.idToken,
                expiresDate: expirationDate
              })
            }
          )
        )
      }
    )
  );

  @Effect({dispatch: false})
  authLogin = this.action$.pipe(
    ofType(AuthActions.LOGIN),
    tap(
      (data: AuthActions.Login) => {
        const user = new User(data.payload.email, data.payload.token,
          data.payload.expiresDate);
        // console.log(data);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(localStorage.getItem('user'));
        this.router.navigate(['/products']);
      }
    )
  );

  @Effect({dispatch: false})
  authLogout = this.action$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(
      (data: AuthActions.Logout) => {
        localStorage.removeItem('user');
        this.router.navigate(['auth']);
      }
    )
  );

  constructor(
    private action$: Actions,
    private router: Router,
    private http: HttpClient
  ) {}
}
