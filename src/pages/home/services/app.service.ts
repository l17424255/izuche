/**
 * Created by lmg on 9/28/2017.
 */
import { Injectable } from '@angular/core';
import { Platform, Events } from 'ionic-angular';

@Injectable()
export class AppService {
  //
  APP_LANGUAGE: string = 'AppLanguage';

  constructor(public events: Events,
              public platform: Platform
  ){

  }
}
