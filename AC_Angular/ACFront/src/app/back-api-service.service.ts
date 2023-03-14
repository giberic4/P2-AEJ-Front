import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class BackApiServiceService {

  apiRoot : string = 'http://localhost:5144/';

  constructor(private http: HttpClient) { }

  // getAllItems() : Observable <User> {
  //   return this.http.post(this.apiRoot, Observable);
  // }

  getAllUserItems(User : User) {
    return this.http.post(this.apiRoot, User);
  }
}
