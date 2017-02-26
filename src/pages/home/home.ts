import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { PostsService } from '../../providers/posts-service';
import { PostDetailPage } from '../post-detail/post-detail';

@Component({
  selector: 'page-home',
  providers: [
    PostsService
  ],
  templateUrl: 'home.html'
})
export class HomePage {
  page: any;
  items: any;

  constructor(
    public navCtrl: NavController,
    public postsService: PostsService) {

  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.page = 1;

    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getPosts()
    .subscribe(response => {
      this.items = response;
    });
  }

  seeArticle(item) {
    this.navCtrl.push(PostDetailPage, {
      item: item
    });
  }

}

