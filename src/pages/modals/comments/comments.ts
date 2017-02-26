import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { PostCommentsService } from '../../../providers/post-comments';


@Component({
  selector: 'comments',
  templateUrl: 'comments.html',
  providers: [
    PostCommentsService
  ]
})

export class CommentsPage {

  comments: any;
  url: string = './assets/comments-mock-data.json';

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public postCommentsService: PostCommentsService
    ) {

  }

  ionViewDidLoad() {
    this.loadComments();
  }

  loadComments() {
    this.postCommentsService.getComments()
    .subscribe(response => {
      this.comments = response;
    })
  }

  closeComments() {
    this.viewCtrl.dismiss();
  }

}
