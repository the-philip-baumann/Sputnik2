import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthenticationService} from "../_core/authentication.service";
import {User} from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {} as User

  constructor(private authService: AuthenticationService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  loginForm: FormGroup;

  ngOnInit(): void {

  }

  login(): void {

    console.log('test');
    if (this.loginForm) {
      console.log('logging in');
      this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }
  }
}
