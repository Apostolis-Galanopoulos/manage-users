import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BreadcrumbModel } from '@app/shared/components/breadcrumb/breadcrumb.model';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { selectUserByPage } from '../../state/user.selector';

@Component({
  selector: 'usr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  pagination = {
    page: 0,
    pageSize: 9
  };
  breadcrumbs: BreadcrumbModel[] = [{
    name: 'Users',
  }];
  private destroy$ = new Subject<void>();
  users$: Observable<{ users: User[], totalLength: number }> | undefined;

  constructor (
    private readonly store: Store<User>,
  ) {}

  ngOnInit (): void {
    this.loadUsers();
  }

  pageChange (pageEvent: PageEvent) {
    this.pagination.page = pageEvent.pageIndex;
    this.pagination.pageSize = pageEvent.pageSize;
    this.loadUsers();
    console.log(pageEvent);
  }
  loadUsers () {
    this.users$ = this.store.pipe(select(
      selectUserByPage({
        page_number: this.pagination.page,
        page_size: this.pagination.pageSize,
    }))
    );
  }
  trackByFn (_index: number, message: User) {
    return message.id;
  }

  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
