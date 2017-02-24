import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { PostDetailPage } from '../post-detail/post-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // url: string = 'http://localhost:8888/wordpress/wp-json/wp/v2/posts';
  url: string = 'http://www.arabakarsilastirma.org/wp-json/wp/v2/posts';
  items: any;
  page: any;

  constructor(
    public navCtrl: NavController,
    private http: Http) {
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.page = 1

    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        this.items = data;
      });
  }

  seeArticle(item) {
    this.navCtrl.push(PostDetailPage, {
      item: item
    });
  }

}

