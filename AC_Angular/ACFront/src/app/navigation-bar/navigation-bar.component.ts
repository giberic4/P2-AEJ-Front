import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})

@Injectable({
  providedIn: 'root'
})
export class NavigationBarComponent {
constructor(public service : BackApiServiceService){}

login : boolean = true;

// call() {
//   console.log("Araaaaaaaa" )
//   let log : boolean = false;
//   this.service.loggedin_status.subscribe((data:any)=> {
//     this.login=data;
//     console.log("hop",this.login);
//   });
// }

}




