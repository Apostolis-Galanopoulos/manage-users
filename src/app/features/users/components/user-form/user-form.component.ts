import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'usr-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() userForm!: FormGroup;
  constructor (
  ) { }

  ngOnInit (): void {
  }
  fileUploaded (data: string): void {
    if (this.userForm) {
      this.userForm!.get('avatar')!.setValue(data);
    }
  }
}
