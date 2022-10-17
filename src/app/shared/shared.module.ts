import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { ButtonComponent } from './elements/button/button.component';
import { InputComponent } from './elements/input/input.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
@NgModule({
  declarations: [
    SafeHtmlPipe,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [
    SafeHtmlPipe,
    ButtonComponent,
    InputComponent
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
