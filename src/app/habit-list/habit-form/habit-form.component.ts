import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habit } from 'src/app/shared/habit';

@Component({
  selector: 'app-habit-form',
  template: `<form
      *ngIf="!editMode"
      [formGroup]="habitForm"
      (ngSubmit)="addNewHabit(habitForm.value)"
    >
      <input type="text" formControlName="name" />
      <button>Submit</button>
    </form>
    <form
      *ngIf="editMode"
      [formGroup]="habitForm"
      (ngSubmit)="updateExistingHabit(habitForm.value)"
    >
      <input type="text" formControlName="name" />
      <button>Submit</button>
    </form> `,
  styles: [],
})
export class HabitFormComponent implements OnInit, OnChanges {
  @Output() addHabit = new EventEmitter<Habit>();
  @Output() updateHabit = new EventEmitter<Habit>();
  @Input() editMode: boolean = false;
  @Input() habitToEdit?: Habit;

  habitForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { habitToEdit } = changes;
    if (habitToEdit.currentValue) {
      this.habitForm = this.fb.group({
        name: [habitToEdit.currentValue.name],
      });
    }
  }

  ngOnInit() {
    this.habitForm = this.fb.group({
      name: [this.habitToEdit ? this.habitToEdit.name : ''],
    });
  }

  addNewHabit(formData: { name: string }) {
    this.addHabit.emit({ id: Date.now(), name: formData.name });
    this.habitForm.reset();
  }

  updateExistingHabit(formData: { name: string; id: number }) {
    this.updateHabit.emit({ id: this.habitToEdit!.id, name: formData.name });
    this.habitForm.reset();
  }
}
