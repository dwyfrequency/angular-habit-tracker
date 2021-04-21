import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
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
    <button (click)="setBrowser(search.value)">click</button>
    <div *ngIf="selectedBrowser">Select Browser: {{ selectedBrowser }}</div>
  `,
  styles: [],
})
export class SearchComponent implements OnChanges, AfterViewInit {
  browserNames$ = of(['Edge', 'Firefox', 'Chrome', 'Opera', 'Safari']);
  selectedBrowser?: string;
  @ViewChild('search') selectBrowser?: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    // will appear here
    console.log({
      ngOnInit: this.selectBrowser,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ searchRef: this.selectBrowser });
  }

  setBrowser(browserName: string) {
    this.selectedBrowser = browserName;
  }
}
