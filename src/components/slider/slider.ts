import { Component, Input, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostDetailPage } from './../../components/post-detail/post-detail';


@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})

export class SliderComponent {

  @Input() newestPost: any;
  thumbnailImage: any;

  // @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController
  ) {
  }

  seeArticle(item) {
    this.navCtrl.push(PostDetailPage, {
      item: item
    });
  }


}
