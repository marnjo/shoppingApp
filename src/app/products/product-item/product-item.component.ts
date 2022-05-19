import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

  subtractCount(): void {
    if (this.count <= 0) return;
    this.count--;
  }
  
  addCount(): void {
    this.count++;
  }

}
