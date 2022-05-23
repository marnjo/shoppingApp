import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  cartCount: number;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe(
      (cartState) => {
        this.cartCount = cartState.cart.length;
      }
    );
    let user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      // console.log(new Date(user.expirationTime) > new Date());
      // console.log(new Date(user.expirationTime) < new Date());
      if (new Date(user.expirationTime) > new Date()) {
        this.isAuthenticated = true;
        // console.log(this.isAuthenticated);
      } else {
        this.isAuthenticated = false;
      }
    }
  }

  onLogout(): void {
    this.store.dispatch(new AuthActions.Logout(''))
  }

}
