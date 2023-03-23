import { Component, OnChanges } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})
export class NavigationBarComponent implements OnChanges{
constructor(private service : BackApiServiceService){}

login = this.service.getLoggedin();

ngOnChanges(){
    console.log('checked')
    this.login = this.service.getLoggedin()
}



}
