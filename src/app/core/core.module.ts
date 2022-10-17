import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StoreModule.forRoot({ 'messages': messageReducer}),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   deps: [ManageSessionService],
    //   useFactory: (_m: ManageSessionService, socket: SocketService) => () => { socket.connect(); },
    //   multi: true
    // },
  ],
})
export class CoreModule { }
