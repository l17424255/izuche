import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { LogisticsPage } from '../pages/infostore/logistics/logistics';
import { OrderPage } from '../pages/order/order';
import { HomeService } from '../pages/home/services/home.service';
import { OrderService } from '../pages/order/services/order.service';
import { AppService } from '../modules/common/services/app.service';
import { AuthService } from '../modules/common/services/auth.service';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NearByPage } from '../pages/nearby/nearby';

import { CommonModule } from '../modules/common/common.module';
import { UserModule } from '../pages/user/user.module';
import { OrderModule } from '../pages/order/order.module';
import { ComponentsModule } from '../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CityService } from "../components/city/services/city.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LogisticsPage,
    NearByPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',   //隐藏全部子页面tabs
      backButtonText: '',           //配置返回按钮的文字
    }),
    CommonModule,
    UserModule,
    OrderModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    NearByPage,
    TabsPage,
    LogisticsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HomeService,
    CityService,
    AppService,
    AuthService,
    OrderService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
