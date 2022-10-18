import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
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
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    SafeHtmlPipe,
    ButtonComponent,
    InputComponent,
    CardComponent,
    PaginatorComponent,
    BreadcrumbComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { color: 'primary' } as MatCheckboxDefaultOptions}
  ]
})
export class SharedModule { }
