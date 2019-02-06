import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'slide-volume',
  templateUrl: 'volume.html'
})
export class VolumeSlide {

  volume: number = 50;

  constructor(public navCtrl: NavController) {

  }

}
