import { Component } from '@angular/core';
import { User2 } from '../models2/users2';
import {HttpClient} from '@angular/common/http'
import { FormGroup, FormControl} from '@angular/forms';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(_http: HttpClient, private service: SignUpService) {}

  currentUser : User2 = {
    username : "",
    password: "",
    fname : "",
    lname : "",
    wallet : 0
  }

signUpForm =  new FormGroup({
  fname : new FormControl(''),
  lname : new FormControl(''),
  username: new FormControl(''),
  password: new FormControl(''),
})

signin(){
  const firstN = (document.getElementById("firstname")) as HTMLInputElement;
  const lastN = (document.getElementById("lastname")) as HTMLInputElement;
  const uname = (document.getElementById("username")) as HTMLInputElement;
  const pwd = (document.getElementById("password")) as HTMLInputElement;
  this.currentUser.fname = firstN.value;
  console.log("signUp first name: " + firstN.value);
  this.currentUser.lname = lastN.value;
  console.log("signUp last name: " + lastN.value);
  this.currentUser.username = uname.value;
  console.log("signUp username: " + uname.value);
  this.currentUser.password = pwd.value;
  console.log("signUp password" + pwd.value);
  console.log(this.currentUser);
  this.service.createUser(this.currentUser).subscribe(data => console.log(data));
}
}
