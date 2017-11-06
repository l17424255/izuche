import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the AmapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-amap',
  templateUrl: 'amap.html'
})
export class AmapPage {

  public map: any;

  constructor(
    public navCtrl: NavController) {
    console.log('Hello AmapComponent Component');
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 15,
      center: [110.498868,38.842498]
    });

    //设置DomLibrary，jQuery或者Zepto
    // AMapUI.setDomLibrary($);

    //加载PoiPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
    AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {
      var poiPicker = new PoiPicker({
        input: 'pickerInput' //输入框id
      });
      //监听poi选中信息
      poiPicker.on('poiPicked', function(poiResult) {
        //用户选中的poi点信息
      });
    });
  }
}
