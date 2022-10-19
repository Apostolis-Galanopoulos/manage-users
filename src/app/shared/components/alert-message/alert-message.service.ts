import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertMessageComponent } from './alert-message.component';

@Injectable()
export class AlertMessageService {

  constructor (
    private readonly _snackBar: MatSnackBar
  ) { }

  open (message: string, durationInSeconds: number): void {
    this._snackBar.openFromComponent(AlertMessageComponent, {
      duration: durationInSeconds,
      data: message,
    });
  }
}
