import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetPosts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsService {

  // url: string = 'http://localhost:8888/wordpress/wp-json/wp/v2/posts';
  url: string = 'http://www.arabakarsilastirma.org/wp-json/wp/v2/posts';
  data: any;

  constructor(private http: Http) {

  }

  getPosts() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

}
