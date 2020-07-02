import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {GallerieViewService} from "../_core/gallerie-view.service";

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.scss']
})
export class GallerieComponent implements OnInit {

  constructor(private firebase: AngularFirestore, public galleryView: GallerieViewService) {
    this.firebase.collection('images')
      .valueChanges()
      .forEach((data) => {
        data.forEach((value) => {
          this.images.push(value)
        })
      });
  }

  images = [];
  imagePointer: number = 1;

  ngOnInit(): void {

  }

  openDetailedView(img, i: number): void {
    this.imagePointer = i;
    this.galleryView.displayDetailedImageView = true;
  }

  performAction(action: number) {
    if (action == 1) {
      if (this.imagePointer === this.images.length - 1) {
        this.imagePointer = 0;
      } else {
        this.imagePointer++;
      }
    } else if (action == 2) {
      if (this.imagePointer === 0) {
        this.imagePointer = this.images.length - 1;
      } else {
        this.imagePointer--;
      }
    } else if (action == 3) {
      this.galleryView.displayDetailedImageView = false;
    }
  }
}

