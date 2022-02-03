import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  putProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseURL}/${id}`,
      product,
      httpOptions
    );
  }

  deleteProduct(product: Product) {
    return this.http.delete<Product>(`${this.baseURL}/${product._id}`);
  }
}
