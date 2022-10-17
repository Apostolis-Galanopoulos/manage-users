import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { ContainerComponent } from './container/container.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class UsersModule { }
