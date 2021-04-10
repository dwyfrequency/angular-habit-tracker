import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Habit } from '../shared/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  subject = new BehaviorSubject<Habit[]>([
    { id: 1, name: 'Brush Teeth' },
    { id: 2, name: 'Eat Breakfast' },
    { id: 3, name: 'Do flashcards' },
  ]);

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return this.subject.asObservable();
  }

  removeHabit(id: number): void {
    this.subject.next(this.subject.getValue().filter((x) => x.id !== id));
  }

  addHabit(habit: Habit): void {
    this.subject.next(this.subject.getValue().concat(habit));
  }
}
