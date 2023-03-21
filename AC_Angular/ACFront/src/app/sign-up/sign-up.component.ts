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

signin(firstN : string, lastN : string, uname: string, pwd: string){
  this.currentUser.fname = firstN
  console.log("signUp first name: " + firstN);
  this.currentUser.lname = lastN;
  console.log("signUp last name: " + lastN);
  this.currentUser.username = uname;
  console.log("signUp username: " + uname);
  this.currentUser.password = pwd;
  console.log("signUp password");
  console.log(this.currentUser);
  this.service.createUser(this.currentUser).subscribe(
    data => console.log(data), 
    err => console.log(alert("Username is taken"), err)
    );
}
}
