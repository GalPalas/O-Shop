import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  postProduct(product: Product) {
    return this.http.post<Product>(this.baseURL, product);
  }
}
