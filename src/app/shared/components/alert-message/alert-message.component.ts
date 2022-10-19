import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'usr-alert-message',
  templateUrl: './alert-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertMessageComponent {
  constructor (@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
}
