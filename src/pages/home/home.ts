import { PostDetailPage } from './../../components/post-detail/post-detail';
import { Wp } from './../../providers/wp';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
<<<<<<< HEAD

=======
import { PostsService } from '../../providers/posts-service';
import { PostDetailPage } from '../post-detail/post-detail';
>>>>>>> 59dc1c0120a34e4b426db63023175f45568539c1

@Component({
  selector: 'page-home',
  providers: [
    PostsService
  ],
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD

  posts: any;
=======
>>>>>>> 59dc1c0120a34e4b426db63023175f45568539c1
  page: any;
  items: any;

  constructor(
    public navCtrl: NavController,
<<<<<<< HEAD
    private http: Http,
    public wp: Wp) {
=======
    public postsService: PostsService) {

>>>>>>> 59dc1c0120a34e4b426db63023175f45568539c1
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.page = 1;

    this.loadPosts();
  }

<<<<<<< HEAD
    this.wp.getPosts()
      .subscribe(posts => {
        posts.forEach(element => {
          element.thumbnailUrl = element._links["wp:featuredmedia"][0].href;
        });
        this.posts = posts;
    })

=======
  loadPosts() {
    this.postsService.getPosts()
    .subscribe(response => {
      this.items = response;
    });
>>>>>>> 59dc1c0120a34e4b426db63023175f45568539c1
  }

  seeArticle(item) {
    this.navCtrl.push(PostDetailPage, {
      item: item
    });
  }

}

