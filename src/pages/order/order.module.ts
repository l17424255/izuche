import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPage } from './pages/order-list/order';
import {CommonModule} from "../../modules/common/common.module";

@NgModule({
  declarations: [
    OrderPage,
  ],
  imports: [
    CommonModule,
  ],
  entryComponents:[
    OrderPage
  ],
  providers:[]
})
export class OrderModule {}
