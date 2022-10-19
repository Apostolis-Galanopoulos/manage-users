import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { AlertMessageService } from './components/alert-message/alert-message.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './components/confirmation-dialog/confirmation-dialog.service';
import { DisplayImageComponent } from './components/display-image/display-image.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ButtonComponent } from './elements/button/button.component';
import { InputComponent } from './elements/input/input.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
@NgModule({
  declarations: [
    SafeHtmlPipe,
    ButtonComponent,
    InputComponent,
    CardComponent,
    PaginatorComponent,
    BreadcrumbComponent,
    FileUploadComponent,
    DisplayImageComponent,
    ConfirmationDialogComponent,
    AlertMessageComponent,
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    SafeHtmlPipe,
    ButtonComponent,
    InputComponent,
    CardComponent,
    PaginatorComponent,
    BreadcrumbComponent,
    FileUploadComponent,
    DisplayImageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ConfirmationDialogService,
    AlertMessageService,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { color: 'primary' } as MatCheckboxDefaultOptions}
  ]
})
export class SharedModule { }
