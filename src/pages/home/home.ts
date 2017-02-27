import { PostCommentsService } from './../../providers/post-comments';
import { PostDetailPage } from './../../components/post-detail/post-detail';
import { Wp } from './../../providers/wp';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.page = 1;

    this.loadPosts();
  }

  loadPosts() {
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

