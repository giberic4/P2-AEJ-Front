import { Component } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'
import { getLocaleDayNames, NgIf } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
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
  email : "",
  wallet : 0
}

id : string = "Id";
wallet : string = "Wallet";
fname : string = "Firstname";
lname : string = "Lastname";

signinform = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});

//validate is not needed, it may be used in the future to validate or check for valid credentails. 
//we can also validate in the html as well.
validate()
{
  const username = (document.getElementById("loginID")) as HTMLInputElement;
  const password = (document.getElementById("passwordID")) as HTMLInputElement;


  this.login(username.value, password.value)

}

user0 : boolean = false;
s : string | null = "";

login(u : string, p : string){

  let routeID : number = 0;
  this.newuser.username = u;
  console.log("username in login : " + u)
  this.newuser.password = p;
  console.log("password in login : " + p)
  console.log(this.newuser);

  this.service.getLogin(this.newuser).subscribe(data => {
    if (data === false){
      alert("invalid username/password combination!");
    }
    if (data === true ){
      alert("success!");
    }
    console.log(data);
  });
  this.router.navigateByUrl('');

  this.service.getUserByUsername(this.newuser.username).subscribe(data => {
    console.log(Object.values(data));
    this.newuser.id=Object.values(data)[0];
    this.newuser.fname=Object.values(data)[1];
    this.newuser.lname=Object.values(data)[2];
    this.newuser.wallet=Object.values(data)[5];
    localStorage.setItem("id", String(this.newuser.id));
    this.s=localStorage.getItem("username");
    console.log(this.s);
    localStorage.setItem('fname', this.newuser.fname);
    localStorage.setItem('lname', this.newuser.lname);
    localStorage.setItem('wallet', String(this.newuser.wallet));
    console.log(this.newuser.fname);
  });

  this.service.getLogin(this.newuser).subscribe(data => {
    if (data===true) {   
        localStorage.setItem('username', this.newuser.username);
        this.router.navigate([`/user-profile/${this.newuser.username}`]);
    }
  });
}
}
