import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { USER_MOCK_DATA } from '../../mock/user-mock-data';
import { UserFormService } from '../../services/user.form.service';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let userFormService: UserFormService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ UserFormComponent ],
      providers: [
        UserFormService,
      ]
    })
    .compileComponents();
    userFormService = TestBed.inject(UserFormService);
  });

  beforeEach(() => {
    const form: FormGroup = userFormService.buildForm();
    form.patchValue(USER_MOCK_DATA);
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    component.userForm = form;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
