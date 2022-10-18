import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { USER_COLLECTION } from './constants/user.constants';

import { InitService } from './services/init.service';
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
