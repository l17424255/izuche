/**
 * Created by lmg on 10/26/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StoreComponent {

  currentIndex:number = 0;
  cities:Array<any> = [{"code":200001,"title":"黄浦区","stores":[{"name":"南浦大桥服务点"}]},
    {"code":200001,"title":"虹口区","stores":[{"name":"宝隆宾馆店"},{"name":"四平路服务点"}]},
    {"code":200001,"title":"青浦区"},
    {"code":200001,"title":"浦东新区","stores":[{"name":"浦东机场店"},{"name":"科技馆店"},{"name":"三林店"}]},
    {"code":200001,"title":"闵行区","stores":[{"name":"虹桥机场T1店"},{"name":"老闵行金平点"}]},
    {"code":200001,"title":"徐汇区","stores":[{"name":"上海南站服务点"},{"name":"锦江乐园店"},{"name":"3号线漕溪路地铁站"}]},
    {"code":200001,"title":"普陀区","stores":[{"name":"11号线上海西站服务点1111111111111111111111111111111"},{"name":"大华服务点"}]}];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){
    console.log(this.currentIndex)
  }

  ionViewDidLoad() {
    console.log('11111');
  }

  selectMenu(index) {
      this.currentIndex = index;
  }
}
