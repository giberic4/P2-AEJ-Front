import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';

@Component({
  selector: 'app-get-marketplace-items',
  templateUrl: './get-marketplace-items.component.html',
  styleUrls: ['./get-marketplace-items.component.css']
})
export class GetMarketplaceItemsComponent {

  constructor(private api: BackApiServiceService) { }
  items : any [] = [];
  
  // getItemForm : FormGroup = new FormGroup({
  //   userID : new FormControl('', [Validators.required, Validators.maxLength(256)]),
  // })

  // id : any;
  // n : string = "Username";
  clicked : boolean = false;


  Clicked(e: Event) {
    this.clicked=true;
    e.preventDefault();
    // console.log(this.getItemForm);

    // this.api.getAllUserItems1().subscribe(data => console.log(data));
    // if(this.getItemForm.valid) {
      // console.log(this.getItemForm.controls['userID'].value);
      this.api.getMarketplaceItems().subscribe(data => {
        console.log(data);
        this.items=data as any;
        // this.id=data[this.n as keyof typeof data];
        console.log(this.items);
      });
      // this.api.getAllUserItems(this.getItemForm.controls['userID'].value).subscribe(data => {
      //   this.items=data as any;
      //   console.log(this.items);
      // });
    // }
  }
}
