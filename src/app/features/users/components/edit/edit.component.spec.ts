import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertMessageService } from '@app/shared/components/alert-message/alert-message.service';
import { ConfirmationDialogService } from '@app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { of } from 'rxjs';
import { USER_MOCK_DATA } from '../../mock/user-mock-data';
import { ManageUserService } from '../../services/manage-user.service';
import { UserService } from '../../services/user.service';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    const UserServiceSpy = jasmine.createSpyObj('UserService', ['getAll', 'create', 'update', 'getOne', 'delete']);
    const ConfirmationDialogServiceSpy = jasmine.createSpyObj('ConfirmationDialogService', ['openDialog']);
    const AlertMessageServiceServiceSpy = jasmine.createSpyObj('AlertMessageService', ['open']);
    const ManageUserServiceSpy = jasmine.createSpyObj('ManageUserService', ['goTo', 'update', 'create', 'deleteUser', 'delete']);
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ EditComponent ],
      providers: [
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
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
