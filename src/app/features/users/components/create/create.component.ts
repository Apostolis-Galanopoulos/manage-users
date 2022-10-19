import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BreadcrumbModel } from '@app/shared/components/breadcrumb/breadcrumb.model';
import { ManageUserService } from '../../services/manage-user.service';
import { UserFormService } from '../../services/user.form.service';

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
    private readonly manageUserService: ManageUserService
  ) { }

  ngOnInit (): void {
    this.userForm = this.userFormService.buildForm();
  }

  create (): void {
    this.manageUserService.create(this.userForm);
  }
}
