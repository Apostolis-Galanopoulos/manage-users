import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { selectAllUsers } from '../state/user.selector';

@Component({
  selector: 'usr-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  users$: Observable<User[]> | undefined;

  constructor (
    private readonly store: Store<User>,
  ) {}

  ngOnInit (): void {
    this.users$ = this.store.pipe(select(selectAllUsers));
  }

  trackByFn (_index: number, message: User) {
    return message.id;
  }

  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
