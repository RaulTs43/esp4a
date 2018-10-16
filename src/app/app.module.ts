import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EspService } from '../service/esp.service';

//Material
import {MaterialModule} from './material';
//Animatios
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

const firebaseConfig: any = {
  apiKey: "AIzaSyDBfavS8Rhn8XH2_QNUkW5EEjbrdXYUp7w",
  authDomain: "esp4a-iot-761bb.firebaseapp.com",
  databaseURL: "https://esp4a-iot-761bb.firebaseio.com",
  projectId: "esp4a-iot-761bb",
  storageBucket: "esp4a-iot-761bb.appspot.com",
  messagingSenderId: "75777057412"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [EspService],
  bootstrap: [AppComponent]
})
export class AppModule { }

