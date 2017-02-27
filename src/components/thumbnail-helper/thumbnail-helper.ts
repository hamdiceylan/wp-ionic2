import { Wp } from './../../providers/wp';
import { Thumbnail } from './../thumbnail/thumbnail';
import { Component,Input } from '@angular/core';

/*
  Generated class for the ThumbnailHelper component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'thumbnail-helper',
  templateUrl: 'thumbnail-helper.html'
})
export class ThumbnailHelperComponent {

  @Input() url: any;
  thumbnailImage: any;
  constructor(public wp: Wp) {
  }

  ngOnChanges(changes) {
    console.log(changes);
      this.wp.getThumbnailFromUrl(this.url)
     .subscribe(image => {
         this.thumbnailImage =image.source_url;
      })
  }

}




