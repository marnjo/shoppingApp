import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';

import * as AuthActions from './store/auth.actions';
import * as fromAuth from './store/auth.reducer';
import { IResponseFirebase } from '../shared/interfaces';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private store: Store<fromAuth.State>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password2: new FormControl(null, [Validators.minLength(6), Validators.required])
    });
    (this.signUpForm.get('password2') as AbstractControl).setValidators(this.confirmPassword.bind(this));
  }

  onSubmitIn(logInForm: NgForm): void {
    if (!logInForm.valid) {
      alert('please enter the right details');
      return;
    }
    this.authService.signIn(logInForm.value.email, logInForm.value.password)
      .subscribe(
        (res: IResponseFirebase) => {
          console.log(res);
        }
      );
    // this.store.dispatch(new AuthActions.InitiateLogin({email: logInForm.value.email, password: logInForm.value.password}));
    // console.log(logInForm);
  }
  
  onSubmitUp(): void {
    console.log(this.signUpForm);
  }

  clearIn(logInForm: NgForm): void {
    logInForm.reset();
  }
  
  clearUp(): void {
    this.signUpForm.reset();
  }

  confirmPassword(control: AbstractControl): {[s: string]: boolean} | null {
    // console.log(this.signUpForm.controls.password.value !== this.signUpForm.controls.password2.value);
    // console.log(this.signUpForm.controls.password.value, this.signUpForm.controls.password2.value);
    if (this.signUpForm.controls.password.value !== this.signUpForm.controls.password2.value) {
      console.log({'passwordsDoNotMatch': true});
     return {'passwordsDoNotMatch': true}
    }
    return null;
  }
  

}
