/**
 * Created by lmg on 9/25/2017.
 */
import { Injectable } from '@angular/core';
import { Platform, Events } from 'ionic-angular';

import { Helper } from './helper.service';
import { AuthService } from './auth.service';

@Injectable()
export class AppService {
  //
  // constructor
  constructor(
    public events: Events,
    public platform: Platform,
    public helper: Helper,
    public authService: AuthService
  ) {

  }
}
