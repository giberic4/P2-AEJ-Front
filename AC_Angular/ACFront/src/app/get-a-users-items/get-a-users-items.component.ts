// import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
// import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
// import { BackApiServiceService } from '../back-api-service.service';

// @Component({
//   selector: 'app-get-a-users-items',
//   templateUrl: './get-a-users-items.component.html',
//   styleUrls: ['./get-a-users-items.component.css']
// })
  
//   export class GetAUsersItemsComponent {

//     constructor(private api: BackApiServiceService) { }
//     items : any [] = [];
    
//     getItemForm : FormGroup = new FormGroup({
//       userID : new FormControl('', [Validators.required, Validators.maxLength(256)]),
//     })

//     id : any;
//     n : string = "Username";
//     clicked : boolean = false;  
  
//     processForm(e: Event) {
//       this.clicked=true;
//       e.preventDefault();
//       console.log(this.getItemForm);

//       if(this.getItemForm.valid) {
//         console.log(this.getItemForm.controls['userID'].value);
//         this.api.getUserByID(this.getItemForm.controls['userID'].value).subscribe(data => {
//           console.log(data);
//           this.id=data[this.n as keyof typeof data];
//           console.log(this.id);
//         });
//         this.api.getAllUserItems(this.getItemForm.controls['userID'].value).subscribe(data => {
//           this.items=data as any;
//           console.log(this.items);
//         });
//       }
//     }
//   }


import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { BackApiServiceService } from '../back-api-service.service';

@Component({
  selector: 'app-get-a-users-items',
  templateUrl: './get-a-users-items.component.html',
  styleUrls: ['./get-a-users-items.component.css']
})
  
  export class GetAUsersItemsComponent implements OnInit{

    constructor(private api: BackApiServiceService, private router : Router) { }
    items: any[] = [];

    userId = sessionStorage.getItem("id")!;
    userIdInt : number = +this.userId;
    clicked : boolean = false;

    ngOnInit(): void {
      this.api.getAllUserItems(this.userIdInt).subscribe(data => {
        this.items=data as any;
    });
  }

    

    getItemForm : FormGroup = new FormGroup({
      userID : new FormControl('', [Validators.required, Validators.maxLength(256)]),
    })
  
    processForm(e: Event) {
      this.clicked=true;
      e.preventDefault();
      console.log(this.getItemForm);
      
      // if(this.getItemForm.valid) {
        // console.log(this.getItemForm.controls['userID'].value);
        // this.api.getUserByID(this.getItemForm.controls['userID'].value).subscribe(data => {
        //   console.log(data);
        //   this.id=data[this.n as keyof typeof data];
        //   console.log(this.id);
        // });
        this.api.getAllUserItems(this.userIdInt).subscribe(data => {
          this.items=data as any;
          console.log(this.items);
          console.log("@@@@@@");
        });
      // }
    }

    SellItem(e: Event) {
   
      var clickedElement = <HTMLElement>e.target;
      var clickedRow = clickedElement.parentElement?.parentElement?.innerText;
      sessionStorage.setItem('buyID', clickedRow?.split("\t")[0]!);
      sessionStorage.setItem('buyName', clickedRow?.split("\t")[1]!);
      sessionStorage.setItem('buyAvailable', clickedRow?.split("\t")[2]!);
      sessionStorage.setItem('buyPrice', clickedRow?.split("\t")[3]!);
      sessionStorage.setItem('buyPhoto', clickedElement.parentElement?.parentElement?.querySelector("img")?.getAttribute('src')!);
      console.log("############");
      this.router.navigate([`/user-profile/sell`]);
  }
  }