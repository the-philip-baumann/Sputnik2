import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private firebase: AngularFirestore) {
    this.postCreationForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('')
    });
  }

  postCreationForm: FormGroup;

  ngOnInit(): void {
  }

  saveToDatabase(): void {
    this.firebase.collection('blogs').doc(this.firebase.createId()).set({
      title: this.postCreationForm.get('title').value,
      description: this.postCreationForm.get('description').value,
      content: this.postCreationForm.get('content'),
      date: this.postCreationForm.get('date').value,
      imgId: this.postCreationForm.get('imgUrl').value,
    }).then(() => console.log('post saved'));
  }


}
