/**
 * Created by lmg on 9/25/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LocalStorageService {
  constructor(public http: Http) {
    console.log('Hello LocalStorageService Provider');
  }

  set(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  get(key: string){
    let value: string = localStorage.getItem(key);

    if (value && value != "undefined" && value != "null") {
      return JSON.parse(value);
    }

    return null;
  }
}
