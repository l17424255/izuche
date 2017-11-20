import { Component, Input } from '@angular/core';

/**
 * Generated class for the EmptyViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'empty-view',
  templateUrl: 'empty-view.html'
})
export class EmptyViewComponent {

  @Input() text: string = '';
  @Input() icon: string = 'alert';

  constructor() {
    console.log('Hello EmptyViewComponent Component');
  }

}
