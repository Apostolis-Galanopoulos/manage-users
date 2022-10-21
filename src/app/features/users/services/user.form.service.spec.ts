import { TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UserFormService } from './user.form.service';

describe('UserFormService', () => {
  let service: UserFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      providers: [UserFormService]
    });
    service = TestBed.inject(UserFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created the user form', () => {

    const form: FormGroup = service.buildForm();

    expect(form.invalid).toBe(true);
  });
});
