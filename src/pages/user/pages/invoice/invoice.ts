import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import {InvoiceDetailPage} from "../invoice-detail/invoice-detail";

/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  showType: string = "invoice";
  invoiceDetail = InvoiceDetailPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('');
    console.log('ionViewDidLoad InvoicePage');
  }

  delInvoice() {
    let toast = this.toastCtrl.create({
      message: '删除成功!',
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

}
