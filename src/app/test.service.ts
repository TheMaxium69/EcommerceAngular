import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = 'http://localhost:8080/learn/api/products';

  constructor(private http: HttpClient) {
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  delete(productId: number): Observable<any> {
    return this.delete(productId);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.apiUrl + '/' + product.id, product);
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  findOne(id: string | null): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/' + id);
  }
  //constructor(private http: HttpClient) { }

  /*findAll(): Observable<User[]>   {
    return this.http.get<User[]>(this.url);
  }*/
}


export class User {
  constructor(public id: number, public name: string, public category: string, public description: string, public price: number, public promo: number, public active: boolean) {
  }
}




