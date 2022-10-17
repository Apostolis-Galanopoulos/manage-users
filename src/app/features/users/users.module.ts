import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { USER_COLLECTION } from './constants/user.constants';

import { ContainerComponent } from './container/container.component';
import { InitService } from './services/init.service';
import { UserService } from './services/user.service';
import { UserEffects } from './state/user.effect';
import { userReducer } from './state/user.reducer';
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
    ReactiveFormsModule,
    StoreModule.forFeature(USER_COLLECTION, userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    UserService,
    InitService,
  ]
})
export class UsersModule {

  constructor (
    private readonly initService: InitService
  ) {
    this.initService.init();
  }
}
