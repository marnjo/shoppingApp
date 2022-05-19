import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/interfaces';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;
  @Input() title: string;
  constructor(
    private productService: ProductServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  seeProduct(i: number): void {
    this.router.navigate(['/products', i]);
  }

}
