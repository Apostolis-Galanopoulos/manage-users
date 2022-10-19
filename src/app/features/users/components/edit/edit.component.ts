import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbModel } from '@app/shared/components/breadcrumb/breadcrumb.model';
import { User } from '../../models/user.model';
import { ManageUserService } from '../../services/manage-user.service';
import { UserFormService } from '../../services/user.form.service';

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

  update (): void {
    this.manageUserService.update(this.userForm, this.user);
  }
  delete (): void {
    this.manageUserService.deleteUser(this.user.id, ['/users']);
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
