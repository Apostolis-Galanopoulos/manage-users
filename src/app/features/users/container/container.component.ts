import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'usr-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  users$: Observable<User[]> | undefined;

  constructor () {}

  ngOnInit (): void {

  }

  trackByFn (_index: number, message: User) {
    return message.id;
  }

  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
