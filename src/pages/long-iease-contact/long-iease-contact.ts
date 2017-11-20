import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the LongIeaseContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-long-iease-contact',
  templateUrl: 'long-iease-contact.html',
})
export class LongIeaseContactPage {

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.form = new FormGroup({
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LongIeaseContactPage');
  }

  onSubmit() {
    this.alertCtrl.create({
      title: '提交成功',
      message: '感谢您预订车辆，我们将在一个工作日联系您。',
      buttons: ['确定']
    }).present();
    console.log('提交需求成功！');
  }

}
