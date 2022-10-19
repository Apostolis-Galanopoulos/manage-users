import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from './button.type';

@Component({
  selector: 'usr-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() name!: string;
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() iconName!: string;
  @Input() isRoundButton: boolean = false;
  @Input() type: ButtonType = 'raised';
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  click () {
    this.clicked.emit();
  }
}
