import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  template: ` <ul>
      <li *ngFor="let user of users | async">{{ user.name }}</li>
    </ul>

    <p>{{ users | async | json }}</p>`,
  styles: [],
})
export class UserListComponent implements OnInit {
  users?: Observable<any>;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
