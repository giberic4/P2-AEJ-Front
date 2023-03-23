import { Component } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'
import { getLocaleDayNames, NgIf } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})

@Injectable({
  providedIn:'root'
})

export class SignInComponent {

  
constructor(private nav:NavigationBarComponent,_http: HttpClient, private service : BackApiServiceService, private router : Router){}
newuser : User = 
{
  username :  "",
  password : "",
  fname : "",
  lname : "",
  email : "",
  wallet : 0
}

// id : string = "Id";
// wallet : string = "Wallet";
// fname : string = "Firstname";
// lname : string = "Lastname";

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
  console.log(username.value);
  
    

  this.login(username.value, password.value)

}

s : string | null = "";



login(u : string, p : string){

  this.service.getUserByUsername(u).subscribe(data => {
    this.newuser.id=Object.values(data)[0];
    this.newuser.fname=Object.values(data)[1];
    this.newuser.lname=Object.values(data)[2];
    this.newuser.wallet=Object.values(data)[5];
    console.log(Object.values(data));
  });
  
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
      
      sessionStorage.clear(); 
      sessionStorage.setItem("username", this.newuser.username);
      sessionStorage.setItem("fname", this.newuser.fname);
      sessionStorage.setItem("lname", this.newuser.lname);
      sessionStorage.setItem("wallet", String(this.newuser.wallet));
      sessionStorage.setItem("id", String(this.newuser.id));
      sessionStorage.setItem("loggedin", 'true')
      this.router.navigate([`/user-profile/${this.newuser.username}`]);
      alert("success!");
      this.service.authenticate();
      // this.nav.call();
      // console.log("Beeeeee",init_status);
    }
  });


  this.service.getUserByUsername(u).subscribe(data => {
    console.log(Object.values(data));
    this.newuser.id=Object.values(data)[0];
    this.newuser.fname=Object.values(data)[1];
    this.newuser.lname=Object.values(data)[2];
    this.newuser.wallet=Object.values(data)[5];
  });
}
}
