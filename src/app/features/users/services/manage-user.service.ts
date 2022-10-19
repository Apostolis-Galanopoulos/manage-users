import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessageService } from '@app/shared/components/alert-message/alert-message.service';
import { ConfirmationDialogService } from '@app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { addUser, deleteUser, updateUser } from '../state/user.action';
import { UserService } from './user.service';

@Injectable()
export class ManageUserService {

  constructor (
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly confirmationDialogService: ConfirmationDialogService,
    private readonly alertMessageService: AlertMessageService,
    private readonly store: Store<User>,
  ) { }

  goTo (urls: string[]) {
    this.router.navigate(urls).then().catch();
  }

/**
 *
 * @param userForm
 * @param user
 */
  update (userForm: FormGroup, user: User): void {
    if (userForm.valid) {
      const userData = userForm.value;
      userData.createAt = user.createAt;
      this.userService.update(userData)
      .pipe(
        tap(res => {
          const changes: Update<User> = {
            id: res.id,
            changes: user
        };
          this.store.dispatch(updateUser({ update: changes }));
        })
      )
      .subscribe(() => {
        this.goTo(['/users']);
        this.alertMessageService.open('User has been updated successfully', 1000);
      });
    }
  }
  /**
   *
   * @param userForm
   */
  create (userForm: FormGroup): void {
    if (userForm.valid) {
      this.userService.create(userForm.value)
      .pipe(
        tap(user => {
          this.store.dispatch(addUser({ user: user }));
          this.alertMessageService.open('User has been created successfully', 1000);
        })
      )
      .subscribe(() => {
        this.goTo(['/users']);
      });
    }
  }

  /**
   *
   * @param userId
   * @param redirectTo
   */
  deleteUser (userId: number, redirectTo?: string[]): void {
    this.confirmationDialogService.openDialog({
      message: 'Are you sure you want to delete this user?',
      title: 'Confirmation',
      id: userId,
    })
    .subscribe((conData) => {
      this.delete(conData.id, redirectTo);
    });
  }
  /**
   *
   * @param id
   * @param redirectTo
   */
  delete (id: number, redirectTo?: string[]) {
    this.userService.delete(id)
    .subscribe(() => {
      if (redirectTo) {
        this.goTo(redirectTo);
      }
      this.alertMessageService.open('User has been deleted successfully', 1000);
      this.store.dispatch(deleteUser({ id }));
    });
  }
}
