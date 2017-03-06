import { Component, Input } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})

export class SliderComponent {

  @Input() newestPost: any;

  constructor() {
  }

  ionViewDidEnter() {

  }


}
