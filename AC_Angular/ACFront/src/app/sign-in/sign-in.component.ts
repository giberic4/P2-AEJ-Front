import { Component } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'
import { getLocaleDayNames } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  
constructor(_http: HttpClient, private service : BackApiServiceService){}
newuser : User = 
{
  username :  "",
  password : "",
  fname : "",
  lname : "",
  wallet : 0
}

signinform = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});

login(){
  this.newuser.username = "ericuser";
  this.newuser.password = "password";
  console.log(this.newuser);
  worked : Boolean
  this.service.getLogin(this.newuser).subscribe(data => console.log(data));


}

}
