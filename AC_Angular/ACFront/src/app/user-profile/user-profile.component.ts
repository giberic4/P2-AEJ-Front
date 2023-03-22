import { Component } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})
export class UserProfileComponent {
  constructor(private service : BackApiServiceService, private user : SignInComponent) {console.log(user.newuser.username);}
  username : string  = localStorage.getItem("username")!;
  fname : string = localStorage.getItem("fname")!;
  lname : string  = localStorage.getItem("lname")!;
  id : string = localStorage.getItem("id")!;
  wallet : string = localStorage.getItem("wallet")!;
}


