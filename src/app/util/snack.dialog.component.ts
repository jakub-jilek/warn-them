import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'hero-created-dialog',
  template: `
    <span class="{{data.isError ? 'dialog-error-color' : 'dialog-color'}}">
        {{ data.textData }}
    </span>
  `,
  styles: [`
    .dialog-color {
      color: ghostwhite;
    }
    .dialog-error-color {
      color: darkred;
    }
  `],
})
export class SnackDialogComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }
}

