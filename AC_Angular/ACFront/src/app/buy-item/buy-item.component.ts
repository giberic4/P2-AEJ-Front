import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent {
  constructor() {}

  buyID : number = parseInt(localStorage.getItem('buyID')!);
  buyName : string = localStorage.getItem('buyName')!;
  buyAvailable : number = parseInt(localStorage.getItem('buyAvailable')!);
  buyPrice : number = parseInt(localStorage.getItem('buyPrice')!);
  buyPhoto : string = localStorage.getItem('buyPhoto')!;
  wallet : number = parseInt(localStorage.getItem("wallet")!);

  input : number = 0;
  totalSum : number = 0;

  // input : string = (document.getElementById("selectquantity") as HTMLInputElement).value;
  Calculate(e : Event) {
    if ((document.getElementById("selectquantity") as HTMLInputElement).value!=null) {
      this.input = parseInt((document.getElementById("selectquantity") as HTMLInputElement).value);
      this.totalSum=this.buyPrice*(this.input);
    }

  }

  Validate() {
    var s=document.getElementById("selectquantity")! as HTMLInputElement;
    if (this.input<0)
      s.value="";
    if (this.input>this.buyAvailable)
      s.value="";  
  }
 
  PutOrder(e : Event) {
    
  }
}
