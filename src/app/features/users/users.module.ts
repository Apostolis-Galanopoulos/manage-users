import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { USER_COLLECTION } from './constants/user.constants';

import { InitService } from './services/init.service';
import { ManageUserService } from './services/manage-user.service';
import { UserService } from './services/user.service';
import { UserEffects } from './state/user.effect';
import { userReducer } from './state/user.reducer';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(USER_COLLECTION, userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    ManageUserService,
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
