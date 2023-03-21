import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';

@Component({
  selector: 'app-get-marketplace-items',
  templateUrl: './get-marketplace-items.component.html',
  styleUrls: ['./get-marketplace-items.component.css']
})
export class GetMarketplaceItemsComponent implements OnInit {

  constructor(private api: BackApiServiceService) { }
  items : any [] = [];
  
  ngOnInit(): void {
    console.log("dd");
    this.api.getMarketplaceItems().subscribe(data => {
      this.items=data as any;
  });
}

  clicked : boolean = false;
  

  SearchClicked(e: Event) {
    if ((document.getElementById("itemsearch") as HTMLInputElement).value != null)
      console.log("@@");
      this.api.getMarketplaceItemsByName((document.getElementById("itemsearch") as HTMLInputElement).value).subscribe(data => {
        this.items=data as any;
      });
     
    // if (this.itemname != null)
    //   console.log("@@");
    // this.clicked=true;
    // e.preventDefault();
    
    // this.api.getMarketplaceItems().subscribe(data => {
    //   this.items=data as any;
    // });
    //   this.api.getMarketplaceItems().subscribe(data => {
    //     console.log(data);
    //     this.items=data as any;
    //     console.log(this.items);
    //   });
  }
}
