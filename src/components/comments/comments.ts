import { ViewController, NavParams } from 'ionic-angular';
import { Wp } from './../../providers/wp';
import { Component } from '@angular/core';

/*
  Generated class for the Comments component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {

  comments: any;
  commentUrl: string;
  commentsLength:number;

  constructor(public wp:Wp,
      public viewCtrl: ViewController,
      public navParams: NavParams) {
      this.commentUrl = navParams.get('commentUrl');
      this.wp.getCommentsFromUrl(this.commentUrl)
      .subscribe(comments => {
        console.log(comments)
        this.commentsLength = comments.length;
        this.comments = comments;
    })
  }

  closeComments() {
    this.viewCtrl.dismiss();
  }

  postComment() {
    console.log("Post comment clicked!!");
  }


}
