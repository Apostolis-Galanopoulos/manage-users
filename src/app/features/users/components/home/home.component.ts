import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BreadcrumbModel } from '@app/shared/components/breadcrumb/breadcrumb.model';
import { ConfirmationDialog } from '@app/shared/components/confirmation-dialog/confirmation-dialog.model';
import { ConfirmationDialogService } from '@app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { select, Store } from '@ngrx/store';
import { takeUntil, Observable, Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { ManageUserService } from '../../services/manage-user.service';
import { UserService } from '../../services/user.service';
import { deleteUser } from '../../state/user.action';
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
    private readonly confirmationDialogService: ConfirmationDialogService,
    private readonly userService: UserService,
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
  onActionEvent (data: {action: string, id: string}) {
    console.log(data);
    if (data.action === 'edit') {
      console.log(`/users/edit/${data.id}`);
      this.manageUserService.goTo([`/users/edit/${data.id}`]);
    } else if (data.action === 'delete') {
      this.confirmationDialogService.openDialog({
        message: 'Are you sure you want to delete this user?',
        title: 'Confirmation',
        id: data.id,
      })
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((conData) => {
        this.handleConfirmationAction(conData);
      });
    }
  }
  /**
   *
   * @param action
   */
  handleConfirmationAction (action: ConfirmationDialog) {
    this.userService.delete(action.id)
    .subscribe(() => {
      this.store.dispatch(deleteUser({ id: action.id }));
    });
  }
  /**
   *
   * @param _index
   * @param message
   * @returns string
   */
  trackByFn (_index: number, message: User): string {
    return message.id;
  }

  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
