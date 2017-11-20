import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LongIeaseContactPage} from "../long-iease-contact/long-iease-contact";

/**
 * Generated class for the LongIeasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-long-iease',
  templateUrl: 'long-iease.html',
})
export class LongIeasePage {

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.form = new FormGroup({
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LongIeasePage');
  }

  onSubmit() {
    this.navCtrl.push(LongIeaseContactPage);
    console.log('sign in request.')
  }

}
