import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.form = new FormGroup({
      phone: new FormControl('', Validators.required),
      veriCode: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  onSubmit() {
    console.log('sign up ...')
  }

}
