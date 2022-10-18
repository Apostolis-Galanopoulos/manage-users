import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'usr-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() length: number | undefined;
  @Input() pageSize: number = 0;
  @Input() pageSizeOptions: number[] = [9, 25, 50, 100];

  @Output() onPageEvent = new EventEmitter();

  constructor () { }

  ngOnInit (): void {
  }

  pageEvent (pageEvent: PageEvent) {
    this.onPageEvent.emit(pageEvent);
  }

}
