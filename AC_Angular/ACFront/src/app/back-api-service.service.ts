import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { User } from './models/user';
import { Item } from './models/item';


@Injectable({
  providedIn: 'root'
})
export class BackApiServiceService {

  apiRoot : string = 'http://localhost:5144';
  apiRoot1 : string = 'http://localhost:5144/user-inventory/userId?userId=5';
  apiRoot2 : string = 'http://localhost:5144/login';
  username : string = "";
  constructor(private http: HttpClient) {   }

  
  getAllUserItems(id : number) {
    let newUrl=this.apiRoot+`/user-inventory/userid?userid=${id}`;
    return this.http.get(newUrl);
  }

  getLogin(user : User) : Observable<boolean>{
    return this.http.post(this.apiRoot+"/login", user) as Observable<boolean>
  }

  getUserByID(id : number) {
    let newUrl=this.apiRoot+`/user?userid=${id}`;
    return this.http.get(newUrl);
  }

  getMarketplaceItems(){
    return this.http.get(this.apiRoot+"/marketplace");
  }
}
