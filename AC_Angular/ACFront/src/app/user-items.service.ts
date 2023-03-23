import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserItemsService {

  constructor() { }

  private subject : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currentData = this.subject.asObservable();

  changeSubject(newData : object) {
    this.subject.next(newData);
  }

}
