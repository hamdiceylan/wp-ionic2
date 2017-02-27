import { CommentsPage } from './../../pages/modals/comments/comments';
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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
    public navParams: NavParams
    ) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
  }

  shareArticle() {
    console.log("shareAricle clicked");
  }

  saveArticle() {
    console.log("saveArticle clicked");
  }

  commentArticle() {
    console.log("commentArticle clicked");
    let modal = this.modalCtrl.create(CommentsPage,{});
    modal.present();
  }

}
