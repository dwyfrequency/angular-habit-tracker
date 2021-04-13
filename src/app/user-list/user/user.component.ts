import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, share, switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  template: `<p><a routerLink="../">return to users</a></p>
    <p>user works!</p>
    <p>userId: {{ userId | async | json }}</p>
    <p>todos: {{ userTodos | async | json }}</p>`,

  styles: [],
})
export class UserComponent implements OnInit {
  userId?: Observable<number>;
  userTodos?: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.params.pipe(
      map((params) => Number(params.id)),
      share()
    );
    this.userTodos = this.userId.pipe(
      switchMap((id) => this.userService.getUserTodos(id))
    );
  }
}
