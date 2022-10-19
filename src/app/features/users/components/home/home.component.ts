import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BreadcrumbModel } from '@app/shared/components/breadcrumb/breadcrumb.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { ManageUserService } from '../../services/manage-user.service';
import { selectUserByPage } from '../../state/user.selector';

@Component({
  selector: 'usr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  pagination = {
    page: 0,
    pageSize: 9
  };
  breadcrumbs: BreadcrumbModel[] = [{
    name: 'Users',
  }];
  users$: Observable<{ users: User[], totalLength: number }> | undefined;

  constructor (
    private readonly store: Store<User>,
    private readonly manageUserService: ManageUserService,
  ) {}

  ngOnInit (): void {
    this.loadUsers();
  }

  pageChange (pageEvent: PageEvent) {
    this.pagination.page = pageEvent.pageIndex;
    this.pagination.pageSize = pageEvent.pageSize;
    this.loadUsers();
  }
  /**
   *@description
   */
  loadUsers () {
    this.users$ = this.store.pipe(select(
      selectUserByPage({
        page_number: this.pagination.page,
        page_size: this.pagination.pageSize,
    }))
    );
  }
  /**
   *
   * @param data
   */
  onActionEvent (data: {action: string, id: number}) {
    if (data.action === 'edit') {
      this.manageUserService.goTo([`/users/edit/${data.id}`]);
    } else if (data.action === 'delete') {
      this.manageUserService.deleteUser(data.id);
    }
  }
  /**
   *
   * @param _index
   * @param message
   * @returns string
   */
  trackByFn (_index: number, message: User): number {
    return message.id;
  }
}
