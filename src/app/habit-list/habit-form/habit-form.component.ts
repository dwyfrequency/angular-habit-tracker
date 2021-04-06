import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habit } from 'src/app/shared/habit';

@Component({
  selector: 'app-habit-form',
  template: `<form
    [formGroup]="habitForm"
    (ngSubmit)="addNewHabit(habitForm.value)"
  >
    <input type="text" formControlName="name" />
    <button>Submit</button>
  </form>`,
  styles: [],
})
export class HabitFormComponent {
  @Output() addHabit = new EventEmitter<Habit>();

  habitForm: FormGroup = this.fb.group({
    name: [''],
  });

  constructor(private fb: FormBuilder) {}

  addNewHabit(formData: { name: string }) {
    this.addHabit.emit({ id: Date.now(), name: formData.name });
    this.habitForm.reset();
  }
}
