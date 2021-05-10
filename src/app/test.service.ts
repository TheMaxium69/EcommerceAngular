import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = 'http://localhost:8080/learn/api/products';
  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]>   {
    return this.http.get<User[]>(this.url);
  }
}

export class User {
  constructor(public id: number, public name: string, public category: string, public description: string, public price: number, public promo: number, public active: boolean) {
  }
}




