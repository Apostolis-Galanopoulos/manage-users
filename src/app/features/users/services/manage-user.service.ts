import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessageService } from '@app/shared/components/alert-message/alert-message.service';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { addUser, updateUser } from '../state/user.action';
import { UserService } from './user.service';

@Injectable()
export class ManageUserService {

  constructor (
    private readonly router: Router,
    private readonly userService: UserService,
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
      console.log(userForm);
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
          console.log('successfully');
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
      console.log(userForm);
      this.userService.create(userForm.value)
      .pipe(
        tap(user => {
          this.store.dispatch(addUser({ user: user }));
          console.log('successfully');
        })
      )
      .subscribe(() => {
        this.goTo(['/users']);
      });
    }
  }
}
