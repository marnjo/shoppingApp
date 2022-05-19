import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.http.get<any>('https://fakestoreapi.com/products').subscribe(e => {console.log(e)})
    // this.http.post<any>(
    //   'https://fakestoreapi.com/products',
    //   JSON.stringify(
    //     {
    //         title: 'test product',
    //         price: 13.5,
    //         description: 'lorem ipsum set',
    //         image: 'https://i.pravatar.cc',
    //         category: 'electronic'
    //     })
    // ).subscribe(e => {console.log(e)});
    // this.http.get<any>('https://fakestoreapi.com/products').subscribe(e => {console.log(e)})
  }

}
