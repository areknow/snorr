import { Component } from '@angular/core';
import { AudioProvider } from '../../providers/audio/audio';

@Component({
  selector: 'audio-state-control',
  templateUrl: 'audio-state-control.html'
})
export class AudioStateControlComponent {

  /**
   * Constructor
   * @param audioProvider - service
   */
  constructor(public audioProvider: AudioProvider) { }

  /**
   * toggleState - change play/pause state
   */
  toggleState(): void {
    this.audioProvider.playing = !this.audioProvider.playing;
  }
}
