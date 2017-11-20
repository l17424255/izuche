import { NgModule } from '@angular/core';
import {Platform, Events, ModalController, AlertController} from 'ionic-angular';
import { CommonModule } from '../modules/common/common.module';

import { AmapComponent } from './amap/amap';
import { StoreComponent } from './store/store';
import {CityComponent} from "./city/city";
import { EmptyViewComponent } from './empty-view/empty-view';

@NgModule({
	declarations: [
	  AmapComponent,
    StoreComponent,
    CityComponent,
    EmptyViewComponent
  ],
	imports: [
	  CommonModule
  ],
	exports: [
	  AmapComponent,
    StoreComponent,
    CityComponent,
    EmptyViewComponent
  ]
})
export class ComponentsModule {}
