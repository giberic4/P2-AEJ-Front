import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations: [
    NavigationBarComponent
  ]


})

export class AppComponent {
  constructor(private router: Router, private n : NavigationBarComponent) { }
  title = 'ACFront';

  }

