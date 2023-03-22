import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BackApiServiceService } from '../back-api-service.service';

@Component({
  selector: 'app-get-marketplace-items',
  templateUrl: './get-marketplace-items.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})
export class GetMarketplaceItemsComponent implements OnInit {

  constructor(private api: BackApiServiceService, private router : Router) { }
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
      this.api.getMarketplaceItemsByName((document.getElementById("itemsearch") as HTMLInputElement).value).subscribe(data => {
        this.items=data as any;
      });
  }

  BuyItem(e: Event) {
   
      var clickedElement = <HTMLElement>e.target;
      var clickedRow = clickedElement.parentElement?.parentElement?.innerText;
      localStorage.setItem('buyID', clickedRow?.split("\t")[0]!);
      localStorage.setItem('buyName', clickedRow?.split("\t")[1]!);
      localStorage.setItem('buyAvailable', clickedRow?.split("\t")[2]!);
      localStorage.setItem('buyPrice', clickedRow?.split("\t")[3]!);
      localStorage.setItem('buyPhoto', document.querySelector("img")?.getAttribute('src')!);
     
      this.router.navigate([`/marketplace/buy`]);
  }

  
}
