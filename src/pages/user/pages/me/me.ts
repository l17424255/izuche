/**
 * Created by lmg on 9/25/2017.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AppService} from "../../../../modules/common/services/app.service";

import {AmapPage} from "../map/amap";
import {InvoicePage} from "../invoice/invoice";
import {FeedbackPage} from "../feedback/feedback";
import {CommproblemPage} from "../commproblem/commproblem";

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})

export class MePage {

  InvoicePage = InvoicePage;
  FeedbackPage = FeedbackPage;
  CommproblemPage = CommproblemPage;

  constructor(
    public heyApp: AppService,
    // public noticeService: NoticeService,
    public navCtrl: NavController
    // public utilService: UtilService
  ) {
  }

  doRefresh(refresher) {

    setTimeout(function(){
      refresher.complete();
    }, 1000)
  }

  gotoMeProfilePage(){
    if (this.heyApp.authService.authOrLogin()) {
      // this.navCtrl.push(MeProfilePage);
    }
  }

  gotoMyTimelinePage(){
    if (this.heyApp.authService.authOrLogin()) {
      // this.navCtrl.push(TimelinePage);
    }
  }

  //
  // open terms page
  openTermsPage() {
    // this.navCtrl.push(BrowserPage, {
    //   browser: {
    //     title: '用户协议',
    //     url: 'http://119.29.250.146:8900/docs/terms.html'
    //   }
    // });
  }

  gotoContact(){
    window.location.href = "tel:18201938314";
  }

  gotoAmapPage(){
    this.navCtrl.push(AmapPage);
  }

  goShare(){
    // this.navCtrl.push(MeSharePage);
  }
}
