import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Wp } from './../../providers/wp';
import { Http } from '@angular/http';
import { PostDetailPage } from './../../components/post-detail/post-detail';
import { SliderComponent } from '../../components/slider/slider';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  providers: [
    Wp
  ],
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;
  page: any;
  items: any;

  constructor(
    public navCtrl: NavController,
    private http: Http,
    public wp: Wp) {
    StatusBar.overlaysWebView(true);
    StatusBar.styleBlackTranslucent();
  }

  ionViewWillEnter () {
    this.page = 1;
    this.loadPosts();
  }

  ionViewDidEnter() {

  }

  loadPosts() {
    this.wp.getPosts()
      .subscribe(posts => {
        posts.forEach(element => {
          element.thumbnailUrl = element._links["wp:featuredmedia"][0].href;
          element.commentUrl = element._links["replies"][0].href;
        });
        return this.posts = posts;
    })
  }

  seeArticle(item) {
    this.navCtrl.push(PostDetailPage, {
      item: item
    });
  }

}

