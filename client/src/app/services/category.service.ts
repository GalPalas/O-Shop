import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Categories } from '../shared/Categories';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  readonly baseURL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.baseURL);
  }
}
