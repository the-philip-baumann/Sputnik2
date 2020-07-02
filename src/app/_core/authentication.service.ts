import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {User} from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firebaseAuthentication: AngularFireAuth, private router: Router) { }
  public user;

  login (email:string, password: string): void {
    console.log(email)
    this.firebaseAuthentication.signInWithEmailAndPassword(email, password).then((value) => {
      console.log('User signed in');
      this.user = value;
      console.log(value);
      this.router.navigateByUrl('/home');
    }).catch((e) => {
      console.log(e);
    });
  }


}
