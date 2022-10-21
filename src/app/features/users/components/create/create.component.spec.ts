import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AlertMessageService } from '@app/shared/components/alert-message/alert-message.service';
import { ConfirmationDialogService } from '@app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { of } from 'rxjs';
import { USER_MOCK_DATA } from '../../mock/user-mock-data';
import { ManageUserService } from '../../services/manage-user.service';
import { UserFormService } from '../../services/user.form.service';
import { UserService } from '../../services/user.service';

import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {

    const UserServiceSpy = jasmine.createSpyObj('UserService', ['getAll', 'create', 'update', 'getOne', 'delete']);
    const ConfirmationDialogServiceSpy = jasmine.createSpyObj('ConfirmationDialogService', ['openDialog']);
    const AlertMessageServiceServiceSpy = jasmine.createSpyObj('AlertMessageService', ['open']);
    const ManageUserServiceSpy = jasmine.createSpyObj('ManageUserService', ['goTo', 'update', 'create', 'deleteUser', 'delete']);
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ CreateComponent ],
      providers: [
        UserFormService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of(USER_MOCK_DATA)
          }
        },
        { provide: ManageUserService, useValue: ManageUserServiceSpy },
        { provide: ConfirmationDialogService, useValue: ConfirmationDialogServiceSpy },
        { provide: AlertMessageService, useValue: AlertMessageServiceServiceSpy },
        { provide: UserService, useValue: UserServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an invalid form', () => {
    expect(component.userForm.invalid).toBe(true);
  });

  it('should be an valid form', () => {
    component.userForm.patchValue(USER_MOCK_DATA);
    expect(component.userForm.valid).toBe(true);
  });

  it('should be prefill with data', () => {
    component.userForm.patchValue(USER_MOCK_DATA);
    expect(component.userForm.get('name')?.value).toEqual(USER_MOCK_DATA.name);
    expect(component.userForm.get('lastName')?.value).toEqual(USER_MOCK_DATA.lastName);
    expect(component.userForm.get('avatar')?.value).toEqual(USER_MOCK_DATA.avatar);
    expect(component.userForm.get('email')?.value).toEqual(USER_MOCK_DATA.email);
  });

  it('should be had an breadcrumb with data', () => {

    expect(component.breadcrumbs).toEqual([
      {
        name: 'Users',
        path: '/users'
      },
      {
        name: 'Create new User',
      }]);
  });

  it('renders an usr-breadcrumb', () => {
    const { debugElement } = fixture;
    const breadcrumb = debugElement.query(By.css('usr-breadcrumb'));
    expect(breadcrumb).toBeTruthy();
  })
  it('renders an usr-user-form', () => {
    const { debugElement } = fixture;
    const usrUserForm = debugElement.query(By.css('usr-user-form'));
    expect(usrUserForm).toBeTruthy();
  })
  it('renders an submit-action', () => {
    const { debugElement } = fixture;
    const submitAction = debugElement.query(By.css('.submit-action'));
    const usrButton = debugElement.query(By.css('usr-button'));
    expect(submitAction).toBeTruthy();
    expect(usrButton).toBeTruthy();
  })
});
