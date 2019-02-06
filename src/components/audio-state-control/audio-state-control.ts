import { Component } from '@angular/core';

/**
 * Generated class for the AudioStateControlComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'audio-state-control',
  templateUrl: 'audio-state-control.html'
})
export class AudioStateControlComponent {

  text: string;

  constructor() {
    console.log('Hello AudioStateControlComponent Component');
    this.text = 'Hello World';
  }

}
