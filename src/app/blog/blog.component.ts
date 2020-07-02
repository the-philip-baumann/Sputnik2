import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../_core/authentication.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router, private authService: AuthenticationService) { }

  blogsCollection: AngularFirestoreCollection<any>;
  blogs: Observable<any>;


  ngOnInit(): void {
    this.blogsCollection = this.firestore.collection('blogs');
    this.blogs = this.blogsCollection.valueChanges();
  }

  navigateToDetailView(blog): void {
    this.router.navigate(['/post', {title: blog.title}]);
  }




}
