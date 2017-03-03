import { Wp } from './../../providers/wp';
import { Thumbnail } from './../thumbnail/thumbnail';
import { Component,Input } from '@angular/core';

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
      this.wp.getThumbnailFromUrl(this.url)
     .subscribe(image => {
         this.thumbnailImage = image.source_url;
      })
  }

}




