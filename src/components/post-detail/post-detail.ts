import { CommentsComponent } from './../comments/comments';
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from 'ionic-native';
import 'rxjs/add/operator/map';



/*
  Generated class for the PostDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
  providers: [Http]
})

export class PostDetailPage {

  selectedItem: any;

  constructor (
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,

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
      message: "Testing, sharing this from inside an app I'm building right now",
      subject: null,
      file: "https://i.ytimg.com/vi/c8nFduO7gX8/maxresdefault.jpg",
      url: null
    };

    SocialSharing.share(options);

  }

  saveArticle() {
    console.log("saveArticle clicked");

  }

  commentArticle() {
    let modal = this.modalCtrl.create(CommentsComponent,{commentUrl: this.selectedItem.commentUrl });
    modal.present();
  }

}
