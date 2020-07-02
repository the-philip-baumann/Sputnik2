import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { BlogComponent } from './blog/blog.component';
import { VideoComponent } from './video/video.component';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire";
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreatePostComponent } from './create-post/create-post.component';
import {AngularFireAuthModule} from "@angular/fire/auth";



export const firebaseConfig = {
  apiKey: "AIzaSyDaIUEp8xMuqJlIiCIdvHbLixdMkLr9F3w",
  authDomain: "sputnik2-b0044.firebaseapp.com",
  databaseURL: "https://sputnik2-b0044.firebaseio.com",
  projectId: "sputnik2-b0044",
  storageBucket: "sputnik2-b0044.appspot.com",
  messagingSenderId: "795467289364",
  appId: "1:795467289364:web:107fe515731681befde801",
  measurementId: "G-NMV3JNKK1T"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallerieComponent,
    BlogComponent,
    VideoComponent,
    PostComponent,
    LoginComponent,
    CreatePostComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(firebaseConfig),
        ReactiveFormsModule,
        AngularFireAuthModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
