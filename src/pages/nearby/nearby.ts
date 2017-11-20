/**
 * Created by lmg on 9/25/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',

})

export class NearByPage {

  isShowMap:boolean = true;
  queryText: string;
  cancelButtonText: string="搜索";
  placeHolderText: string = "搜索门店";
  public map: any;
  carList = [{
    avatar: "https://image.zuchecdn.com/newversion/news/order/ly.jpg",
    name: "大众朗逸",
    price: 250
  },{
    avatar: "https://image.zuchecdn.com/newversion/news/order/2015AKL.jpg",
    name: "2016别克昂科拉",
    price: 258
  },{
    avatar: "https://image.zuchecdn.com/newversion/news/order/past18.jpg",
    name: "大众帕萨特",
    price: 334
  },{
    avatar: "https://image.zuchecdn.com/newversion/news/order/2017KLZ.jpg",
    name: "雪佛兰新科鲁兹",
    price: 224
  }]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){}

  moreDataCanBeLoaded(){

  }

  ionViewDidLoad() {
    if(this.isShowMap) {
      this.loadMap();
    }
  }

  loadMap() {
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 15,
      center: [121.541055,29.809498]
    });

    //设置DomLibrary，jQuery或者Zepto
    // AMapUI.setDomLibrary($);

    //加载PoiPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
    //AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {
      // var poiPicker = new PoiPicker({
      //   input: 'pickerInput' //输入框id
      // });
      // //监听poi选中信息
      // poiPicker.on('poiPicked', function(poiResult) {
      //   //用户选中的poi点信息
      //   console.log(poiResult);
      // });
    //});
  }

  loadMoreData(){

  }

  selectCity(){
    alert(1)
  }

  toggleDiv() {
    this.isShowMap = !this.isShowMap;
  }

  doQuery(ev) {
    console.log(ev);
  }

  itemClick(ev, car){
    console.log(car);
  }
}
