import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habit } from 'src/app/shared/habit';

@Component({
  selector: 'app-habit-item',
  template: `<ng-container *ngIf="habit">
    <li>
      {{ habit.name }}
    </li>
    <button (click)="removeFromRoutine(habit.id)">delete</button>
    <button (click)="editHabitItem()">edit</button>
  </ng-container>`,
  styles: [],
})
export class HabitItemComponent implements OnInit {
  @Input() habit?: Habit;
  @Output() deleteHabit = new EventEmitter<number>();
  @Output() editHabit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeFromRoutine(id: number) {
    this.deleteHabit.emit(id);
  }

  editHabitItem() {
    this.editHabit.emit(this.habit!);
  }
}
