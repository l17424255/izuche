import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Helper} from "../../../modules/common/services/helper.service";

@Injectable()
export class OrderService{

  headers: Headers;
  requestOptions: RequestOptions;

  constructor(
    private http:Http,
    private events:Events,
    private helper: Helper
  ){
    this.headers = new Headers({'X-Requested-With': 'XMLHttpRequest'});
    this.requestOptions = new RequestOptions({headers: this.headers, withCredentials: true});
  }

  loadOrderList(){
    const api: string = this.helper.getAPI('order/getOrderList');
  }
}
