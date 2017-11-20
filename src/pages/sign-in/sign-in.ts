import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {SignUpPage} from "../sign-up/sign-up";

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.form = new FormGroup({
      phone: new FormControl('', [Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  onSubmit() {
    console.log('sign in request.')
  }

  goToSignUp() {
    this.navCtrl.push(SignUpPage);
  }

}
