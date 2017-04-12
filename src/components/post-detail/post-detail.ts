import { CommentsComponent } from './../comments/comments';
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import 'rxjs/add/operator/map';



/*
  Generated class for the PostDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
  providers: [
    Http,
    SocialSharing
    ]
})

export class PostDetailPage {

  selectedItem: any;

  constructor (
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing
    ) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
    console.log('this.selectedItem: ', this.selectedItem);
  }

  shareArticle() {
    console.log("shareArticle clicked");

    let options: any = {
      message: "Check out this article",
      subject: "I wanted to share this with you: " + this.selectedItem.title.rendered,
      file: null,
      url: this.selectedItem.link
    };

    this.socialSharing.shareWithOptions(options);

  }

  saveArticle() {
    console.log("saveArticle clicked");

  }

  commentArticle() {
    let modal = this.modalCtrl.create(CommentsComponent,{commentUrl: this.selectedItem.commentUrl });
    modal.present();
  }

}
