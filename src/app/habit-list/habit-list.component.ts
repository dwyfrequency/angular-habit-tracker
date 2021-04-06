import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HabitService } from '../services/habit.service';
import { Habit } from '../shared/habit';

@Component({
  selector: 'app-habit-list',
  template: `
    <h1>{{ title }}</h1>
    <p>habit-list works!</p>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul *ngIf="habits">
      <app-habit-item
        *ngFor="let item of habits | async"
        [habit]="item"
        (deleteHabit)="onRemoveHabit($event)"
        (editHabit)="updateHabit($event)"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  title = 'Habits';

  habits?: Observable<Habit[]>;

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitService
      .getHabits()
      .pipe(tap((x) => console.log(x)));
  }

  onRemoveHabit(id: number) {
    this.habitService.removeHabit(id);
  }

  updateHabit(id: number): void {
    console.log(id);
  }

  onAddHabit(habit: Habit) {
    this.habitService.addHabit(habit);
  }
}
