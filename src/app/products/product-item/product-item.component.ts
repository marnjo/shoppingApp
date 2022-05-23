import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IProduct } from 'src/app/shared/interfaces';
import * as fromApp from '../../store/app.reducer';
import * as cartActions from '../../cart/store/cart.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  count: number;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.count = this.product.amount;
    this.store.select('cart').subscribe((cartState) => {
      if (this.product.id == 1) {
        // console.log(cartState)
      }
      this.count = cartState.cart.filter(
        (prod) => prod['id'] == this.product['id']
      ).length;
    });
    // console.log(this.product);
  }

  subtractCount(): void {
    if (this.count <= 0) return;
    this.store.dispatch(
      new cartActions.RemoveFromCart({ product: this.product })
    );
  }

  addCount(): void {
    this.store.dispatch(new cartActions.AddToCart({ product: this.product }));
  }
}
