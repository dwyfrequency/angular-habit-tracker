import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from '../shared/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [
    { id: 1, name: 'Brush Teeth' },
    { id: 2, name: 'Eat Breakfast' },
    { id: 3, name: 'Do flashcards' },
  ];

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  removeHabit(id: number) {
    this.habits = this.habits.filter((x) => x.id !== id);
  }

  addHabit(habit: Habit) {
    this.habits.push(habit);
  }
}
