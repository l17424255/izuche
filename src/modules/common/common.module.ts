/**
 * Created by lmg on 9/25/2017.
 */
import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, Events } from 'ionic-angular';

import { AppService } from './services/app.service';
import { Helper } from './services/helper.service';

import {LocalStorageService} from "./services/localStorage.service";

@NgModule({
  imports: [
    IonicModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  providers: [
    Helper,
    AppService,
    LocalStorageService
  ],
  exports: [
    IonicModule
  ],
})
export class CommonModule {
  constructor(
    public heyApp: AppService,
    public events: Events
  ) {
    // subscribe events
    this.subscribeEvents();

    // get auth
    // this.heyApp.authService.getIsAuth();

    // utilityComp register events
    // this.utilityComp.registerEvents();
  }


  //
  // Subscribe events
  subscribeEvents() {
    // subscribe auth logIn
    this.events.subscribe('auth:logIn', (userInfo) => {
      // this.heyApp.authService.logIn(userInfo);
    });


    // subscribe auth logOut
    this.events.subscribe('auth:logOut', () => {
      // this.heyApp.authService.logOut();
    });

    this.events.subscribe('request:error', () => {
      // this.utilityComp.presentToast("请求异常");
    });
  }
}
