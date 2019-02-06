import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AudioStateControlComponent } from './audio-state-control/audio-state-control';

@NgModule({
  declarations: [
    AudioStateControlComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AudioStateControlComponent,
  ]
})
export class ComponentsModule {}
