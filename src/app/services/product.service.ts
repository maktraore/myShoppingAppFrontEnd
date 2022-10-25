import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURI: string;
  constructor(private http: HttpClient) {
    this.baseURI = 'http://localhost:8080/ecommerce/products';
   }

  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURI);
  }

}
