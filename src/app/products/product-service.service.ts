import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http: HttpClient
    ) { }

    getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
        .pipe(
          map(products => {
            return products.map(product => {
              return {
                ...product,
                amount: 0
              }
            })
          })
        );
    }
}
