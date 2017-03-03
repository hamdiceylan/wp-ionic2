// import { Auth } from './auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Wp provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Wp {

  apiEndPoint: string = "http://www.arabakarsilastirma.org/wp-json/wp/v2/";

  constructor(public http: Http) {
  }

  getPosts() {
    return this.http.get(this.apiEndPoint + 'posts')
      .map(res => res.json())
  }

  getThumbnailFromUrl(mediaUrl) {
    return this.http.get(mediaUrl)
      .map(res => res.json())
  }

  getCommentsFromUrl(commentUrl) {
    return this.http.get(commentUrl)
      .map(res => res.json())
  }
}
