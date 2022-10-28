import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { map, Observable } from 'rxjs';
import { Message } from '../model/message';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURI = 'http://localhost:8080/ecommerce';
  baseRestURI = 'http://localhost:8080/products';
  headers= new HttpHeaders( {
    "Content-Type":"application/json"
  });
  constructor(private http: HttpClient) {}

  findAllProducts(cid:number): Observable<Product[]> {
    const url=`${this.baseURI}/products/search/findProductByCategoryId?categoryId=${cid}`;
    console.log(url);
    return this.http.get<Product[]>(url);
  }
  findAllRestProducts(): Observable<Product[]> {
    const url=`${this.baseRestURI}/products`;
    console.log(url);
    const req = this.http.get<ProductResponse>(url);
    return req.pipe(map(data => data._embedded.products));
  }

  registerProduct(product:any):Observable<Message>{
    const url = `${this.baseURI}/products`;
      return this.http.post<Message>(url,
      product,{headers:this.headers});
    }
  }

interface ProductResponse {
  _embedded: {
    products:Product[];
  }
}
