/**
 * Created by lmg on 9/25/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-logistics',
  templateUrl: 'logistics.html',
})
export class LogisticsPage {

  showCancelButton: boolean=true;
  cancelButtonText: string="搜索";
  queryText: string;
  showType: string = "logistics";
  placeHolderText: string = "根据名称查询";

  logisticsList: any = [];
  infostoreList: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logistics');

    // this.infostoreService.getLogisticsList({state: 1})
    //   .then( ret => {
    //     this.logisticsList = ret;
    //   });

  }

  onShowTypeChange(){
    if(this.showType == "logistics"){
      this.placeHolderText = "根据目的地查询";
    } else {
      this.placeHolderText = "根据信息部名称查询";

      // if(this.infostoreList.length == 0){
      //   this.infostoreService.getInfoDepartmentList({})
      //     .then( ret => {
      //       this.infostoreList = ret;
      //     });
      // }
    }
  }

  doRefresh(refresher) {

    this.queryText = "";
    if(this.showType == "logistics"){

      // this.infostoreService.getLogisticsList({state: 1})
      //   .then( ret => {
      //     this.logisticsList = ret;
      //     refresher.complete();
      //   });
    } else {

      // this.infostoreService.getInfoDepartmentList({})
      //   .then( ret => {
      //     this.infostoreList = ret;
      //     refresher.complete();
      //   });
    }
    refresher.complete();
  }

  doQuery(ev) {

    if(!this.queryText){
      this.queryText = null;
    }
    let text = this.queryText;
    let me = this;
    setTimeout(function () {
      me.queryText = text;
    }, 100);


    if(this.showType == "logistics"){

      let data : any = {};
      data.destination = text;
      data.state = 1;

      // this.infostoreService.getLogisticsList(data)
      //   .then( ret => {
      //     this.logisticsList = ret;
      //   });

    } else {

      let data: Object = {
        title: text,
      };

      // this.infostoreService.getInfoDepartmentList(data)
      //   .then( ret => {
      //     this.infostoreList = ret;
      //   });
    }

  }
}

