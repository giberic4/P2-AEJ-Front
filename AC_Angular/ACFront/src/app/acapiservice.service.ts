import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class ACAPIServiceService {

  constructor(private http: HttpClient) { }

  apiRoot : string = 'http://localhost:5144';

  
  // getAllUserItems(id : number) {
  //   let newUrl=this.apiRoot+`/user-inventory/userid?userid=${id}`;
  //   return this.http.get(newUrl);
  // }


  // getLogin(user : User) : Observable<boolean>{
  //   return this.http.post(this.apiRoot+"/login", user) as Observable<boolean>

  // }

  // getUserByID(id : number) {
  //   let newUrl=this.apiRoot+`/user?userid=${id}`;
  //   return this.http.get(newUrl);
  // }

  // getMarketplaceItems(){
  //   return this.http.get(this.apiRoot+"/marketplace");
  // }
}
