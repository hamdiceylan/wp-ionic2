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

  changeRowHeight() {
    // get elements
    var element   = document.getElementById('comment-textarea');
    var textarea  = element.getElementsByTagName('textarea')[0];

    // set default style for textarea
    textarea.style.minHeight  = '0';
    textarea.style.height     = '0';

    // limit size to 96 pixels (6 lines of text)
    var scroll_height = textarea.scrollHeight;
    if(scroll_height > 96)
      scroll_height = 96;

    // apply new style
    element.style.height      = scroll_height + "px";
    textarea.style.minHeight  = scroll_height + "px";
    textarea.style.height     = scroll_height + "px";
  }

  postComment() {
    console.log("Post comment clicked!!");
  }


}
