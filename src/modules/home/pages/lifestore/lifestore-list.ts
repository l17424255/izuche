import { Component } from '@angular/core';

/**
 * Generated class for the LifestoreListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-lifestore-list',
  templateUrl: 'lifestore-list.html'
})
export class LifestoreList {

  text: string;

  constructor() {
    console.log('Hello LifestoreListComponent Component');
    this.text = 'Hello World';
  }

}
