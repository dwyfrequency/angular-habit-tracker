import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { of } from 'rxjs';

/**
 * Allow users to search for specific fields.
 */
@Component({
  selector: 'app-search',
  template: `
    <p>search works!</p>
    <label for="browser">Choose your browser from the list:</label>
    <input list="browsers" name="browser" id="browser" #search />
    <datalist id="browsers">
      <option
        *ngFor="let browserName of browserNames$ | async"
        [value]="browserName"
      ></option>
    </datalist>
    <input type="text" name="test" id="test" #merp />
    <!-- <div *ngIf="input?.nativeElement">{{ input!.nativeElement.value }}</div> -->
  `,
  styles: [],
})
export class SearchComponent implements OnInit, OnChanges, AfterViewInit {
  browserNames$ = of(['Edge', 'Firefox', 'Chrome', 'Opera', 'Safari']);
  @ViewChild('search') selectBrowser?: ElementRef;
  @ViewChild('merp') input?: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log({
      ngOnInit: this.selectBrowser,
      merp: this.input,
    });
  }

  ngAfterViewInit(): void {
    console.log({
      ngOnInit: this.selectBrowser,
      merp: this.input,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ searchRef: this.selectBrowser });
  }
}
