import { PostDetailPage } from './../../components/post-detail/post-detail';
import { Wp } from './../../providers/wp';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;
  page: any;

  constructor(
    public navCtrl: NavController,
    private http: Http,
    public wp: Wp) {
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.page = 1

    this.wp.getPosts()
      .subscribe(posts => {
        posts.forEach(element => {
          element.thumbnailUrl = element._links["wp:featuredmedia"][0].href;
        });
        this.posts = posts;
    })

  }

  seeArticle(item) {
    this.navCtrl.push(PostDetailPage, {
      item: item
    });
  }

}

