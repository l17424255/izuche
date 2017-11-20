import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CarsPage} from "../cars/cars";

/**
 * Generated class for the AddOrderHeadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-order-head',
  templateUrl: 'add-order-head.html',
})
export class AddOrderHeadPage {

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.form = new FormGroup({
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddOrderHeadPage');
  }

  onSubmit() {
    this.navCtrl.push(CarsPage);
  }

}
