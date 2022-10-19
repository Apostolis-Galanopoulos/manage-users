import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { UserResolverService } from '../resolvers/user-resolver.service';

import { ComponentsRoutingModule } from './components-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    ViewComponent,
    EditComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserResolverService
  ]
})
export class ComponentsModule { }
