import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IProduct } from '../shared/interfaces';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: IProduct[];

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe(
      (cartState) => {
        this.cart = cartState.cart;
      }
    )
  }

}
