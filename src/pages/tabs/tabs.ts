import { Component } from '@angular/core';
import { Events, /*Platform,*/ NavController } from 'ionic-angular';

import { MePage } from '../user/me';
import { CoalPage } from '../coal/coal';
// import { InfostorePage } from '../../modules/infostore/pages/infostore/infostore';
import {LogisticsPage} from "../infostore/logistics/logistics";
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CoalPage;
  tab3Root = CoalPage;
  // tab4Root = InfostorePage;
  tab5Root = MePage;
  tab6Root = LogisticsPage;

  constructor(
    public events: Events,
    public navCtrl: NavController) {
    this.subscribeEvents();
  }

  subscribeEvents(){
    // subscribe app gotoPage
    this.events.subscribe('app:gotoPage',(params)=>{
      this.navCtrl.push(params.page)
    });
  }
}
