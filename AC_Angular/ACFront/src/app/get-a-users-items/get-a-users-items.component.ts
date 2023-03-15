import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';

@Component({
  selector: 'app-get-a-users-items',
  templateUrl: './get-a-users-items.component.html',
  styleUrls: ['./get-a-users-items.component.css']
})
  
  export class GetAUsersItemsComponent {

    constructor(private api: BackApiServiceService) { }
  
    getItemForm : FormGroup = new FormGroup({
      userID : new FormControl('', [Validators.required, Validators.maxLength(256)]),
    })
  
    processForm(e: Event) {
      e.preventDefault();
      console.log(this.getItemForm);

      this.api.getAllUserItems1().subscribe(data => console.log(data));
      if(this.getItemForm.valid) {
        console.log(this.getItemForm.value);
  
        this.api.getAllUserItems(this.getItemForm.value).subscribe(data => console.log(data));
      }
    }
  }
