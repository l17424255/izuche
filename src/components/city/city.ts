/**
 * Created by lmg on 10/30/2017.
 */
import { Component, ViewChildren, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, Content, Events } from 'ionic-angular';
import {LocalStorageService} from "../../modules/common/services/localStorage.service";
import {AppGlobal} from "../../app/app.global";
import {AppService} from "../../modules/common/services/app.service";
import {CityService} from "./services/city.service";

@Component({
  selector: 'app-city',
  templateUrl: 'city.html'
})
export class CityComponent{

  private cities:Array<any> = [];
  indexes: Array<string> = []
  filterCities: Array<any> = [];
  @ViewChildren('cityGroup') cityGroup;
  @ViewChild(Content) content: Content;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cityService: CityService,
              public modalCtrl: ModalController,
              public heyApp: AppService,
              private events: Events,
              public localStorageService: LocalStorageService) {
    events.subscribe('city:loaded',(cities) => {
      this.loadCites();
    })
    let areaNameStr = this.localStorageService.get(AppGlobal.areaName)
    if (areaNameStr) {
      // this.areaName = areaNameStr;
    }
  }

  loadCites() {
    this.cities = this.cityService.getGroupCities();
    this.indexes = this.cityService.getIndexes();
  }

  ionViewDidLoad() {
    var $this = this;
    function alphabetMove(e, move) {
      var pPositionY = e.changedTouches[0].clientY
      var currentItem, targetItem;
      var d = document;
      currentItem = d.elementFromPoint(d.body.clientWidth - 1, pPositionY);
      if (!currentItem || currentItem.className.indexOf('index-bar') < 0) return;
      targetItem = document.getElementById(currentItem.innerText);
      document.getElementById('indexs-title').style.display = 'block'
      document.getElementById('indexs-title').innerText = currentItem.innerText;
      if (move) {
        var index = $this.indexes.join('').indexOf(currentItem.innerText);
        $this.content.scrollTo(0, $this.cityGroup._results[index].nativeElement.offsetTop, 300);
      }
    }
    var indexsBar = document.getElementById('indexs-bar');
    indexsBar.addEventListener('touchstart', function (e) {
      alphabetMove(e, false);
    });
    indexsBar.addEventListener('touchmove', e => {
      alphabetMove(e, false);
    });
    indexsBar.addEventListener('touchend', function (e) {
      alphabetMove(e, true);
      document.getElementById('indexs-title').style.display = 'none';
    });
  }

  getItems(e) {
    var newVal = e.target.value;
    if (newVal) {
      this.filterCities = this.cityService.filterCities(newVal);
    }
    else {
      this.filterCities = [];
    }
    this.content.scrollToTop(500);
  }
}
