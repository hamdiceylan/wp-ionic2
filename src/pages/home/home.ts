import { PostDetailPage } from './../../components/post-detail/post-detail';
import { Wp } from './../../providers/wp';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { PostsService } from '../../providers/posts-service';
import { PostDetailPage } from '../post-detail/post-detail';
>>>>>>> 59dc1c0120a34e4b426db63023175f45568539c1
=======
>>>>>>> e5f8c3190db2587717bc849eaa6435e60f9b637b

@Component({
  selector: 'page-home',
  providers: [
    Wp
  ],
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD
<<<<<<< HEAD

  posts: any;
=======
>>>>>>> 59dc1c0120a34e4b426db63023175f45568539c1
=======

  posts: any;
>>>>>>> e5f8c3190db2587717bc849eaa6435e60f9b637b
  page: any;
  items: any;

  constructor(
    public navCtrl: NavController,
<<<<<<< HEAD
<<<<<<< HEAD
    private http: Http,
    public wp: Wp) {
=======
    public postsService: PostsService) {

>>>>>>> 59dc1c0120a34e4b426db63023175f45568539c1
=======
    private http: Http,
    public wp: Wp) {
>>>>>>> e5f8c3190db2587717bc849eaa6435e60f9b637b
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.page = 1;

    this.loadPosts();
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  loadPosts() {
>>>>>>> e5f8c3190db2587717bc849eaa6435e60f9b637b
    this.wp.getPosts()
      .subscribe(posts => {
        posts.forEach(element => {
          element.thumbnailUrl = element._links["wp:featuredmedia"][0].href;
        });
        this.posts = posts;
    })
<<<<<<< HEAD

=======
  loadPosts() {
    this.postsService.getPosts()
    .subscribe(response => {
      this.items = response;
    });
>>>>>>> 59dc1c0120a34e4b426db63023175f45568539c1
=======
>>>>>>> e5f8c3190db2587717bc849eaa6435e60f9b637b
  }

  seeArticle(item) {
    this.navCtrl.push(PostDetailPage, {
      item: item
    });
  }

}

