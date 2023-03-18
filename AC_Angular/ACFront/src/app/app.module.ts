import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GetAUsersItemsComponent } from './get-a-users-items/get-a-users-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetMarketplaceItemsComponent } from './get-marketplace-items/get-marketplace-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GetAUsersItemsComponent,
    GetMarketplaceItemsComponent,
    GetMarketplaceItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
