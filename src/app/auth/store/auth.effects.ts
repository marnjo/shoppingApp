import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, take, tap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import * as environment from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { User } from '../user.model';

@Injectable()
export class AuthEffects {
  signInUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.environment.key}`;
  signUpUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.environment.key}`;

  @Effect()
  authLogin = this.action$.pipe(
    ofType(AuthActions.LOGIN),
    // tap(
    //     () => {
    //         this.router.navigate(['/products']);
    //     }
    // ),
    take(1),
    switchMap((res: AuthActions.Login) => {
      console.log('effect');
      console.log(res);
      // debugger;
      return this.http.post(this.signInUrl, res.payload);
    }),
    map((data: User) => {
      console.log('effect logout part');
      console.log(data);
      return new AuthActions.LoginSuccess(data);
    })
  );

  @Effect()
  authLogout = this.action$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      this.router.navigate(['/auth']);
    })
  );

  @Effect()
  authSignUp = this.action$.pipe(
    ofType(AuthActions.SIGNUP),
    switchMap((res: AuthActions.SignUp) => {
      return this.http.post('', res.payload);
    }),
    tap(() => {
      this.router.navigate(['/products']);
    })
  );

  constructor(
    private action$: Actions,
    private router: Router,
    private http: HttpClient
  ) {}
}
