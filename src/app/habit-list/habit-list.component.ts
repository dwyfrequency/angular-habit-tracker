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
    <app-habit-form
      *ngIf="!editMode"
      (addHabit)="onAddHabit($event)"
    ></app-habit-form>
    <app-habit-form
      *ngIf="editMode"
      [editMode]="editMode"
      [habitToEdit]="editHabitItem"
      (updateHabit)="onUpdateHabit($event)"
    ></app-habit-form>
    <ul *ngIf="habits">
      <app-habit-item
        *ngFor="let item of habits | async"
        [habit]="item"
        (deleteHabit)="onRemoveHabit($event)"
        (editHabit)="onEditHabit($event)"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  title = 'Habits';
  editMode: boolean = false;
  editHabitItem?: Habit;
  habits?: Observable<Habit[]>;

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitService.getHabits();
  }

  onRemoveHabit(id: number) {
    this.habitService.removeHabit(id);
  }

  onUpdateHabit(habit: Habit): void {
    this.habitService.updateHabit(habit);
    this.editMode = false;
    this.editHabitItem = undefined;
  }

  onEditHabit(habit: Habit): void {
    this.editMode = true;
    this.editHabitItem = habit;
  }

  onAddHabit(habit: Habit) {
    this.habitService.addHabit(habit);
  }
}
