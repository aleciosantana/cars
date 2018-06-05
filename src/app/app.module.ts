import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ComponentsModule } from '../components/components.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarProvider } from '../providers/car/car';

 // Initialize Firebase
 var configFB = {
  apiKey: "AIzaSyAHuL7ZER2rfLLytK5x1VHEJqB6MyU3J2o",
  authDomain: "cars-20385.firebaseapp.com",
  databaseURL: "https://cars-20385.firebaseio.com",
  projectId: "cars-20385",
  storageBucket: "cars-20385.appspot.com",
  messagingSenderId: "790765208484"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    ComponentsModule,
    AngularFireModule.initializeApp(configFB),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CarProvider
  ]
})
export class AppModule {}
