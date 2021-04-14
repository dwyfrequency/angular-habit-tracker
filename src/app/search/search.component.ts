import { Component, OnInit } from '@angular/core';
/**
 * Allow users to search for specific fields.
 */
@Component({
  selector: 'app-search',
  template: `
    <p>search works!</p>
    <label for="browser">Choose your browser from the list:</label>
    <input list="browsers" name="browser" id="browser" />

    <datalist id="browsers">
      <option *ngFor="let browser of browserList" [value]="browser"></option>
    </datalist>
  `,
  styles: [],
})
export class SearchComponent implements OnInit {
  browserList = ['Edge', 'Firefox', 'Chrome', 'Opera', 'Safari'];

  constructor() {}

  ngOnInit(): void {}
}
