import { Component } from '@angular/core';

/**
 * Generated class for the AmapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'amap',
  templateUrl: 'amap.html'
})
export class AmapComponent {

  text: string;

  constructor() {
    console.log('Hello AmapComponent Component');
    this.text = 'Hello World';
  }

}
