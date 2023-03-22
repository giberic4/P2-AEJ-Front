import { Component, OnChanges } from '@angular/core';
import { Item } from '../models/item';
import { BackApiServiceService } from '../back-api-service.service';
@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent {
  constructor(private api: BackApiServiceService) {}

  buyID : number = parseInt(localStorage.getItem('buyID')!);
  buyName : string = localStorage.getItem('buyName')!;
  buyAvailable : number = parseInt(localStorage.getItem('buyAvailable')!);
  buyPrice : number = parseInt(localStorage.getItem('buyPrice')!);
  buyPhoto : string = localStorage.getItem('buyPhoto')!;
  wallet : number = parseInt(localStorage.getItem("wallet")!);
  buyer_id : number = parseInt(localStorage.getItem("id")!);
  
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
 
  item : Item = {
    id : 0,
    quantity : 0,
    buyer_id : 0,
    price : 0,
    item_id : 0,
    seller_id : 0
  } 
  arr : any[] = [];
  PutOrder(e : Event) {
  
  this.item.id=this.buyID;
  this.item.quantity=this.input;
  this.item.buyer_id=this.buyer_id;
  this.item.price=this.buyPrice;
  this.arr = [this.item.id,this.item.quantity,this.item.buyer_id];
  console.log(this.arr);
  this.api.BuyItem(this.arr);

  //   this.api.GetSellerAndItemIdByListingId(this.buyID).subscribe(data => {
  //     this.item.id=this.buyID;
  //     this.item.quantity=this.input;
  //     this.item.buyer_id=this.buyer_id;
  //     this.item.price=this.buyPrice;
  //     this.item.seller_id=(data as Array<number>)[0];
  //     this.item.item_id=(data as Array<number>)[1];
  //     this.arr = [this.item.id,this.item.quantity,this.item.buyer_id];
  //     console.log(this.arr);
  //     this.api.BuyItem(this.arr);
  // });
    
  }
}
