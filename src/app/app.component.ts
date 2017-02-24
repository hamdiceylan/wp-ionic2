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

  constructor(platform: Platform) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.menuItems = [
      {"title": "Home","icon": "home"},
      {"title": "Categories","icon": "albums"},
      {"title": "Saved Articles","icon": "bookmark"},
      {"title": "About","icon": "information-circled"},
      {"title": "Help","icon": "help"}
    ]
  }

}
