import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from './card.model';

@Component({
  selector: 'usr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() action = new EventEmitter();
  @Input() data!: CardModel;

  constructor () { }

  ngOnInit (): void {
  }

  actions (action: string, id: number): void {
    this.action.emit({action, id});
  }

}
