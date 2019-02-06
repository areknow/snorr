import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'tone-volume',
  templateUrl: 'tone.html'
})
export class ToneSlide {

  tone: number = 80;

  constructor(public navCtrl: NavController) { }

  /**
   * rangeShift - receive range change
   * @param value: range value
   */
  rangeShift(value: number): void {
    console.log(value);
  }
}
