import { Injectable } from '@angular/core';
import { User } from '../shared/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly baseURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post<User>(this.baseURL, user);
  }
}
