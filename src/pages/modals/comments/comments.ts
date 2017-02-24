import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'comments',
  templateUrl: 'comments.html'

})

export class CommentsPage {

  comments: any;
  url: string = './assets/comments-mock-data.json';

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private http: Http
    ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        this.comments = data;
        console.log('data: ', data);
      });
  }

  closeComments() {
    this.viewCtrl.dismiss();
  }

}
