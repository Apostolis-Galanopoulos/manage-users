import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ModulesRoutingModule } from './modules-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModulesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
