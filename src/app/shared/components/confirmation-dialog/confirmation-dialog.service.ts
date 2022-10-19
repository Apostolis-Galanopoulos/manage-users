import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { ConfirmationDialog } from './confirmation-dialog.model';

@Injectable()
export class ConfirmationDialogService {

  constructor (public dialog: MatDialog) {}

  openDialog (data: ConfirmationDialog): Observable<ConfirmationDialog> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data
    });
    return new Observable((observer) => {
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          observer.next(data);
        } else {
          observer.error();
        }
      });
  });
  }
}
