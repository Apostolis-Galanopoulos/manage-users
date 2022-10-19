import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialog } from './confirmation-dialog.model';

@Component({
  selector: 'usr-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
  constructor (@Inject(MAT_DIALOG_DATA) public data: ConfirmationDialog) { }
}
