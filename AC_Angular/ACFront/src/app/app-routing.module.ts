import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {GetAUsersItemsComponent} from './get-a-users-items/get-a-users-items.component';
import {GetMarketplaceItemsComponent} from './get-marketplace-items/get-marketplace-items.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'user-items', component: GetAUsersItemsComponent },
  { path: 'marketplace', component: GetMarketplaceItemsComponent },
  { path: 'user-profile/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignInComponent,GetAUsersItemsComponent,UserProfileComponent]
