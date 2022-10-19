import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'usr-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() length: number | undefined;
  @Input() pageSize: number = 0;
  @Input() pageSizeOptions: number[] = [9, 25, 50, 100];

  @Output() onPageEvent = new EventEmitter();

  pageEvent (pageEvent: PageEvent) {
    this.onPageEvent.emit(pageEvent);
  }

}
