import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AudioProvider } from '../../../../providers/audio/audio';

@Component({
  selector: 'tone-volume',
  templateUrl: 'tone.html'
})
export class ToneSlide {

  tone: number = 80;

  constructor(
    public navCtrl: NavController,
    public audioProvider: AudioProvider
  ) {

  }

}
