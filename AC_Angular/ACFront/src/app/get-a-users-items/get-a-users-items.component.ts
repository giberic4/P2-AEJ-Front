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
    items : any [] = [];
    
    getItemForm : FormGroup = new FormGroup({
      userID : new FormControl('', [Validators.required, Validators.maxLength(256)]),
    })

    id : any;
    n : string = "Username";
    clicked : boolean = false;
    // this.api.getUserByID(this.getItemForm.controls['userID'].value).subscribe(data => this.id=data);
    // console.log(id);
  
  
    processForm(e: Event) {
      this.clicked=true;
      e.preventDefault();
      console.log(this.getItemForm);

      // this.api.getAllUserItems1().subscribe(data => console.log(data));
      if(this.getItemForm.valid) {
        console.log(this.getItemForm.controls['userID'].value);
        this.api.getUserByID(this.getItemForm.controls['userID'].value).subscribe(data => {
          console.log(data);
          this.id=data[this.n as keyof typeof data];
          console.log(this.id);
        });
        this.api.getAllUserItems(this.getItemForm.controls['userID'].value).subscribe(data => {
          this.items=data as any;
          console.log(this.items);
        });
      }
    }
  }
