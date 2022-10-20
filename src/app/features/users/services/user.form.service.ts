import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class UserFormService {

  constructor (
    private readonly fb: FormBuilder
  ) {}

  buildForm (): FormGroup {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,
        Validators.pattern('([a-zA-Z0-9][-a-zA-Z0-9_\+\.]*[a-zA-Z0-9])\@([a-zA-Z0-9][-a-zA-Z0-9\.]*[a-zA-Z0-9])[\.]+([a-zA-Z0-9]{2,4})$')]
      ),
      avatar: new FormControl('', [Validators.required]),
      image: new FormControl('', []),
    });
  }
}
