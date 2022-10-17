import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'usr-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Manage-Users';
}
