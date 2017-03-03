import { Wp } from './../providers/wp';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = TabsPage;
  menuItems: any;

  constructor(platform: Platform,
  wp: Wp) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    this.menuItems = []
    wp.getPages()
      .subscribe(cat => {
        cat.forEach(element => {
          let item = {
            title:element.title.rendered,
            icon:"home"
          };
          console.log(item)
          this.menuItems.push(item);
        });
    })
    wp.getCategories()
      .subscribe(cat => {
        cat.forEach(element => {
          let item = {
            title:element.name,
            icon:"home"
          };
          console.log(item)
          this.menuItems.push(item);
        });
    })



  }

}
