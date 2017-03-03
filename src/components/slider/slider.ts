import { Component } from '@angular/core';
import { Wp } from './../../providers/wp';


/*
  Generated class for the Slider component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'slider',
  templateUrl: 'slider.html',
  providers: [Wp]
})
export class SliderComponent {

  sliderImage: any;
  posts: any;
  featuredPost: any;

  constructor(public wp: Wp) {
  }

  ngOnInit(changes) {
      this.wp.getPosts()
      .subscribe(response => {
        this.posts = response;
        this.featuredPost = this.posts[0];
        console.log('this.featuredPost: ', this.featuredPost);
      });
  }



}
