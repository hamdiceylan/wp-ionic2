import { Wp } from './../providers/wp';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = TabsPage;
  menuItems: any;

  constructor(
    wp: Wp,
    platform: Platform,
    private statusBar: StatusBar
  ) {

    this.menuItems = []

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleBlackTranslucent();
    });

    wp.getPages()
      .subscribe(cat => {
        cat.forEach(element => {
          let item = {
            title:element.title.rendered,
            icon:"home"
          };
          this.menuItems.push(item);
        });
    });

    wp.getCategories()
      .subscribe(cat => {
        cat.forEach(element => {
          let item = {
            title:element.name,
            icon:"home"
          };
          this.menuItems.push(item);
        });
    });

  }

}
