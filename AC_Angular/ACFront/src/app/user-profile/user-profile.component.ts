import { Component } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private service : BackApiServiceService, private user : SignInComponent) {}
  username : string |null  = localStorage.getItem("username");
}


