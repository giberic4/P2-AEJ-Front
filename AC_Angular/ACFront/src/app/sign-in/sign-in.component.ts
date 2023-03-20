import { Component } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'
import { getLocaleDayNames } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

@Injectable({
  providedIn:'root'
})

export class SignInComponent {

  
constructor(_http: HttpClient, private service : BackApiServiceService, private router : Router){}
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
  this.newuser.username = ((document.getElementById("loginID")) as HTMLInputElement).value;
  this.newuser.password = ((document.getElementById("passwordID")) as HTMLInputElement).value;
  console.log(this.newuser);

  this.service.getLogin(this.newuser).subscribe(data => {
    if (data===true)
      this.router.navigate([`/user-profile/${this.newuser.username}`]);
  });
}

}
