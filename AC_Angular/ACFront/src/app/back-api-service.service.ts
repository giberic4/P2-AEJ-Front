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

  apiRoot : string = 'http://localhost:5144/user-inventory';
  apiRoot1 : string = 'http://localhost:5144/user-inventory/userId?userId=5';
  apiRoot2 : string = 'http://localhost:5144/login';

  constructor(private http: HttpClient) { }

  // getAllItems() : Observable <User> {
  //   return this.http.post(this.apiRoot, Observable);
  // }

  getAllUserItems(id : number) {
    // console.log("hey",id[""]);
    let newUrl=this.apiRoot+`/userid?userid=${id}`;
    return this.http.get(newUrl);
  }
  getAllUserItems1() : Observable<Array<User>> {
    return this.http.get(this.apiRoot1) as Observable<Array<User>>;
  }



  getLogin(user : User) : Observable<number>{
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'accept' : 'text/plain', 
    //     'Content-Type':  'application/json'
    //   })
    // };


    return this.http.post(this.apiRoot2, user) as Observable<number>
  }


}
