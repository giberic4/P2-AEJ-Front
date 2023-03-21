import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAUsersItemsComponent } from './get-a-users-items/get-a-users-items.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserHomeComponent } from './user-home/user-home.component';
import {GetMarketplaceItemsComponent} from './get-marketplace-items/get-marketplace-items.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [


{
path : '',
component : SignInComponent
},
{path: 'user-home/',
 component : UserHomeComponent, 
},
{
  path: 'home-page',
  component : HomePageComponent,

},
{
  path: 'sign-in',
  component : SignInComponent,

},
{
path : 'user-items',
component : GetAUsersItemsComponent

},
{
  path: 'sign-up',
  component : SignUpComponent,

},
  { path: 'marketplace', component: GetMarketplaceItemsComponent },
  { path: 'user-profile/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignInComponent,GetAUsersItemsComponent,UserProfileComponent]
