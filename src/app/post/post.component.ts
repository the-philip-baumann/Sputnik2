import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFireModule} from "@angular/fire";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  titleParamter: string;
  postListRef;
  post = {} as Post;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) {
    this.titleParamter = this.route.snapshot.paramMap.get('title');
    this.postListRef = this.firestore.collection('blogs');
    this.postListRef.ref.where('title', '==', this.titleParamter).get().then((document) => {
      document.forEach((doc) => {
        this.post.imgId = doc.data().imgId;
        this.post.description = doc.data().description;
        this.post.title = doc.data().title;
        this.post.content = doc.data().content;
      })
    });
  }

  ngOnInit(): void {

  }

}

interface Post {
  imgId: string,
  description: string,
  title: string,
  content: string,
}
