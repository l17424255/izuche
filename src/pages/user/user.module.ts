/**
 * Created by lmg on 9/28/2017.
 */
import { NgModule } from '@angular/core';
import {Platform, Events, ModalController, AlertController} from 'ionic-angular';

import { CommonModule } from '../../modules/common/common.module';

import {LocalStorageService} from "../../modules/common/services/localStorage.service";

import { MePage } from './pages/me/me';
import { InvoicePage } from './pages/invoice/invoice';
import { InvoiceDetailPage } from './pages/invoice-detail/invoice-detail';
import {FeedbackPage} from "./pages/feedback/feedback";
import {CommproblemPage} from "./pages/commproblem/commproblem";
// import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  imports: [
    CommonModule
    // IonicImageViewerModule
  ],
  declarations: [
    MePage,
    InvoicePage,
    InvoiceDetailPage,
    FeedbackPage,
    CommproblemPage
  ],
  entryComponents: [
    MePage,
    InvoicePage,
    InvoiceDetailPage,
    FeedbackPage,
    CommproblemPage
  ],
  providers: [
    //UserService,
  ],
  exports: [
  ],
})
export class UserModule {
  constructor(
    public platform: Platform,
    public events: Events,
    // public heyApp: AppService,
    // public userService: UserService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    // public utilService: UtilService,
    public localStorageService: LocalStorageService
  ) {

    // subcribe events
    this.subscribeEvents();

    // platform ready
    this.platform.ready().then(() => {
      // get user
      this.getUser();

      //启动时自动检查更新
      this.updateApp();
    });
  }

  updateApp(){

  }


  //
  // get user
  getUser() {
  }


  //
  // Subscribe events
  subscribeEvents() {
    //
  }
}
