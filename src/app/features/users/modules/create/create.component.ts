import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BreadcrumbModel } from '@app/shared/components/breadcrumb/breadcrumb.model';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserFormService } from '../../services/user.form.service';
import { UserService } from '../../services/user.service';
import { addUser } from '../../state/user.action';

@Component({
  selector: 'usr-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [UserFormService]
})
export class CreateComponent implements OnInit {

  userForm!: FormGroup;
  breadcrumbs: BreadcrumbModel[] = [
  {
    name: 'Users',
    path: '/users'
  },
  {
    name: 'Create new User',
  }];
  constructor (
    private readonly userFormService: UserFormService,
    private readonly userService: UserService,
    private readonly store: Store<User>,
  ) { }

  ngOnInit (): void {
    this.userForm = this.userFormService.buildForm();
  }

  save (): void {
    if (this.userForm.valid) {
      console.log(this.userForm);
      this.userService.create(this.userForm.value)
      .pipe(
        tap(user => {
          this.store.dispatch(addUser({ user: user }));
          console.log('successfully');
        })
      )
      .subscribe();
    }
  }

}
