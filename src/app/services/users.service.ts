import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/?_page=1&_limit=5`
    );
  }
}
