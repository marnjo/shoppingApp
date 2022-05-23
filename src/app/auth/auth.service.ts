import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as environment from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    signInUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.environment.key}`;
    signUpUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.environment.key}`;
    
    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    signIn(email, password) {
        return this.http.post(
            this.signInUrl,
            {
              email: email,
              password: password,
              returnSecureToken: true
            }
          )
    }
}