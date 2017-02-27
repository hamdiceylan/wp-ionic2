import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostComments provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostCommentsService {

  comments: any;
  url: string = '../assets/comments-mock-data.json';

  constructor(public http: Http) {
  }

  getComments() {
    return this.http.get(this.url)
      .map(res => res.json());
    }

}
