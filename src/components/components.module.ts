import { NgModule } from '@angular/core';
import {Platform, Events, ModalController, AlertController} from 'ionic-angular';
import { CommonModule } from '../modules/common/common.module';

import { AmapComponent } from './amap/amap';
import { StoreComponent } from './store/store';
import {CityComponent} from "./city/city";

@NgModule({
	declarations: [
	  AmapComponent,
    StoreComponent,
    CityComponent
  ],
	imports: [
	  CommonModule
  ],
	exports: [
	  AmapComponent,
    StoreComponent,
    CityComponent
  ]
})
export class ComponentsModule {}
