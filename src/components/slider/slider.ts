import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})

export class SliderComponent {

  @Input() newestPost: any;
  @ViewChild(Slides) slides: Slides;

  constructor() {
  }

  goToSlide() {
    this.slides.slideTo(2, 500)
  }


}
