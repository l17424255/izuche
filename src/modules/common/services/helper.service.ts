import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AuthService } from './auth.service';
import {Http, RequestOptions} from "@angular/http";


@Injectable()
export class Helper {

  headers: Headers;
  requestOptions: RequestOptions;
  //
  // constructor
  constructor(
    public platform: Platform,
    private http: Http,
    public authService: AuthService
  ) {
  }


  //
  // get api
  getAPI(uri): string {
    let apiDomain = (window as any).API_DOMAIN;
    console.log(apiDomain);

    if (apiDomain && apiDomain.substring(0, 4) == 'http') {
      return apiDomain + '/api/' + uri;
    } else {
      return (<any> window).location.href + 'api/' + uri;
    }
  }

  // get api
  getAPP(uri): string {
    let apiDomain = (window as any).API_DOMAIN;

    if (apiDomain && apiDomain.substring(0, 4) == 'http') {
      return apiDomain + '/app/' + uri;
    } else {
      return (<any> window).location.href + 'app/' + uri;
    }
  }


  //
  // get asset url
  getAssetUri(uri): string {
    return uri;
  }


  //
  // get video
  getVideo(uri): string {
    return this.getAssetUri(uri);
  }


  //
  // get img
  getImg(uri): string {

    if(uri){
      return this.getAssetUri(uri);
    } else {
      return './assets/images/touxiang.png';
    }

  }


  //
  // get parameter by name
  getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? undefined : decodeURIComponent(results[1].replace(/\+/g, " "));
  }


  //
  // set Title
  setTitle(title?) {

    let i = document.createElement('iframe');
    i.src = '//m.baidu.com/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
      setTimeout(function(){
        i.remove();
      }, 9)
    }

    document.body.appendChild(i);
  }

  getResponseFromUrl(params) {

    let api: string = this.getAPP('wechatUtil/loadPageByUrl');
    let data = {
      url: params
    };
    return this.http.post(api, params, this.requestOptions)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }


  //
  // handle error
  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
