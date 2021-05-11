import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class Test2Service {url = 'http://localhost:8080/learn/api/products';
  constructor(private http: HttpClient) { }

  findAll(): Observable<User2[]>   {
    return this.http.get<User2[]>(this.url);
  }
  findOune(id: string | null): Observable<Product2[]>   {
    return this.http.get<Product2[]>(this.url + '/' + id);
  }

  findOone(id: string | null): Observable<Product2> {
    return this.http.get<Product2>(this.url + '/' + id);
  }
}

export class User2 {
  constructor(public id: number, public name: string, public category: string, public description: string, public price: number, public promo: number, public active: boolean) {
  }
}


export class User3 {
  constructor(public id: number, public name: string, public category: string, public description: string, public price: number, public promo: number, public active: boolean) {
  }
}

export class Product2 {
  constructor(public id: number,
              public name: string,
              public category: string,
              public description: string,
              public price: number,
              public active: boolean = true,
              public promo: number = 0) {
  }
}
