import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  template: ` <ul>
      <li *ngFor="let user of users | async" (click)="getUserTodos(user.id)">
        <a [routerLink]="user.id">{{ user.name }}</a>
      </li>
    </ul>

    <p>{{ users | async | json }}</p>`,
  styles: [],
})
export class UserListComponent implements OnInit {
  users?: Observable<any>;
  todos?: Observable<any>;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  getUserTodos(id: number) {
    this.todos = this.userService.getUserTodos(id);
  }
}
