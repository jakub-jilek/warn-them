import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'hero-created-dialog',
  template: `
    <span class="example-pizza-party">
        Pizza party!!! 🍕
    </span>
  `,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class HeroCreatedDialogComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
