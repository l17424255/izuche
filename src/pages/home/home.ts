import { Component, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams, Slides } from 'ionic-angular';

import {HomeService} from "./services/home.service";
import {AppGlobal} from "../../app/app.global";
// import {LocalStorageService} from "../../modules/common/services/localStorage.service";
// import {AppService} from "../../modules/common/services/app.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsList: any = [];
  trafficInfo: any = {};
  pageNumber: number = 0;
  isInfiniteEnabled: boolean = true;
  areaName: string = "地区";
  notice: string = "欢迎来到神州租车app，这里有最实用的功能，最及时的信息！";

  @ViewChild('mySlider') slider: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public homeService: HomeService,
              public modalCtrl: ModalController
              // public heyApp: AppService,
              /*public localStorageService: LocalStorageService*/) {
    // let areaNameStr = this.localStorageService.get(AppGlobal.areaName)
    // if(areaNameStr){
    //   this.areaName = areaNameStr;
    // }
  }

  gotoBannerDetail(){
    // this.navCtrl.push(HCAboutPage);
    console.log('gotoBannerDetail');
  }

  gotoTrafficList(){
    // this.navCtrl.push(TrafficListPage);
    console.log('gotoTrafficList');
  }

  gotoLifeStore(data) {
    // this.navCtrl.push(LifestoreList, data)
    console.log('LiftstoreList',data);
  }

  gotoLogisticsPricePage() {
    // this.navCtrl.push(BrowserPage, {
    //   browser: {
    //     title: '查运价',
    //     isLogisticsPrice: true,
    //     url: 'http://shipper.huodada.com/freight/list.shtml?startProvince=%E9%99%95%E8%A5%BF%E7%9C%81&startCity=%E6%A6%86%E6%9E%97%E5%B8%82&startCountry=%E7%A5%9E%E6%9C%A8%E5%8E%BF&endProvince=&endCity=&endCountry='
    //   }
    // });
    console.log('BrowserPage');
  }

  gotoTimeline(data) {
    // if (this.heyApp.authService.authOrLogin()) {
    //   this.navCtrl.push(TimelinePage);
    // }
    console.log('TimelinePage',data);
  }

  gotoNewsList(){
    console.log('NewsListPage');
    // this.navCtrl.push(NewsListPage);
  }

  gotoNewsDetail(news){
    // this.navCtrl.push(BrowserPage, {
    //   browser: {
    //     title: '热点资讯',
    //     isWechatPage: true,
    //     url: news.content
    //   }
    // });
    console.log('BrowserPage',news);
  }

}
