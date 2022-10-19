import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbModel } from '@app/shared/components/breadcrumb/breadcrumb.model';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { ManageUserService } from '../../services/manage-user.service';
import { UserFormService } from '../../services/user.form.service';
import { UserService } from '../../services/user.service';
import { addUser } from '../../state/user.action';

@Component({
  selector: 'usr-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UserFormService]
})
export class EditComponent implements OnInit {

  user!: User;
  userForm!: FormGroup;
  breadcrumbs: BreadcrumbModel[] = [
  {
    name: 'Users',
    path: '/users'
  },
  {
    name: 'Edit ',
  }];
  constructor (
    private readonly userFormService: UserFormService,
    private readonly userService: UserService,
    private readonly store: Store<User>,
    private readonly manageUserService: ManageUserService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.data.subscribe(data => {
      this.user = data['user'];
      this.setBreadcrumbs(data['user']);
    });
   }

  ngOnInit (): void {
    this.userForm = this.userFormService.buildForm();
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  save (): void {
    if (this.userForm.valid) {
      console.log(this.userForm);
      this.userService.update(this.userForm.value)
      .pipe(
        tap(user => {
          this.store.dispatch(addUser({ user: user }));
          console.log('successfully');
        })
      )
      .subscribe(() => {
        this.manageUserService.goTo(['/users']);
      });
    }
  }
  /**
   *
   * @param user
   */
  setBreadcrumbs (user: User) {
    this.breadcrumbs = [
      {
        name: 'Users',
        path: '/users'
      },
      {
        name: `${user.name} ${user.lastName}`,
      }];
  }
}
