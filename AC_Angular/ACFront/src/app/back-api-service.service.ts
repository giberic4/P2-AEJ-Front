import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class BackApiServiceService {

  apiRoot : string = 'http://localhost:5144/user-inventory';
  apiRoot1 : string = 'http://localhost:5144/user-inventory/userId?userId=5';

  constructor(private http: HttpClient) { }

  // getAllItems() : Observable <User> {
  //   return this.http.post(this.apiRoot, Observable);
  // }

  getAllUserItems(id : number) {
    let newUrl=this.apiRoot+`/userid?userid=${id}`;
    return this.http.get(newUrl);
  }
  getAllUserItems1() : Observable<Array<User>> {
    return this.http.get(this.apiRoot1) as Observable<Array<User>>;
  }


}
