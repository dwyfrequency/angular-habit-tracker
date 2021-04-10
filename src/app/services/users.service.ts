import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private params = {
    params: { _page: '1', _limit: '4' },
  };
  constructor(private http: HttpClient) {}

  getUsers() {
    // return this.http.get(
    //   `https://jsonplaceholder.typicode.com/users/?_page=1&_limit=5`
    // );
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/`,
      this.params
    );
  }

  getUserTodos(id: number) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/${id}/todos`,
      this.params
    );
  }
}
