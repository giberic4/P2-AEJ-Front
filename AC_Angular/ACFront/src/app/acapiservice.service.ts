import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Item } from './models/item';
import { itemforallitems } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class ACAPIServiceService {

  constructor(private http: HttpClient) { }

  apiRoot : string = 'https://acnhapi.com/v1a/houseware/';

  AllItems() {;
    return this.http.get(this.apiRoot);
  }
}
