import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAUsersItemsComponent } from './get-a-users-items/get-a-users-items.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [

{
path : '',
component : SignInComponent
},
{path: 'users-items/{id}',
 component : GetAUsersItemsComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
