import { CommentsComponent } from './../components/comments/comments';
import { CommentsPage } from './../pages/modals/comments/comments';
import { PostDetailPage } from './../components/post-detail/post-detail';
import { ThumbnailHelperComponent } from './../components/thumbnail-helper/thumbnail-helper';
import { SliderComponent } from './../components/slider/slider';
import { Wp } from './../providers/wp';
import { NgModule, ErrorHandler } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostCommentsService } from '../providers/post-comments';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostDetailPage,
    CommentsPage,
    ThumbnailHelperComponent,
    SliderComponent,
    CommentsComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostDetailPage,
    CommentsPage,
    CommentsComponent
  ],
  providers: [
    Wp,
    PostCommentsService,
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
