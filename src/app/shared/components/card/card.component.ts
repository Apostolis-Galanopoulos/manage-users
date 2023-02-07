import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModel } from './card.model';

@Component({
  selector: 'usr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Output() action = new EventEmitter();
  @Input() data!: CardModel;

  actions (action: string, id: number): void {
    this.action.emit({action, id});
  }

}
