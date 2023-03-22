import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { observeNotification } from 'rxjs/internal/Notification';
import { ACAPIServiceService} from '../acapiservice.service';
import {itemforallitems} from '../models/item'
@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent{
  constructor(private api: ACAPIServiceService) {  }
  items : any [] = [];
  items1 : itemforallitems[] = [];
  i : itemforallitems  = {
    iurl : "",
    iname : ""
  }

  AllItemForm : FormGroup = new FormGroup({
    itemname : new FormControl(''),
  })
  clicked : boolean = false;
  Name : any;
  Url : string = "";
  

  processForm(e: Event) {


    this.clicked=true;
    console.log(this.AllItemForm);

      this.api.AllItems().subscribe(data => {
        this.items=data as any;
        this.items.forEach(element  => { 
        this.i.iurl = element[0]['image_uri']
        this.i.iname = element[0]['name']['name-USen']
        this.items1.push(
          {
            iurl : element[0]['image_uri'],
            iname : element[0]['name']['name-USen']
          }
        )
        });
      });
     this.items1;
    


  }


}

