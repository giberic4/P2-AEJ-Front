import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';

@Component({
  selector: 'app-get-a-users-items',
  templateUrl: './get-a-users-items.component.html',
  styleUrls: ['./get-a-users-items.component.css']
})
export class GetAUsersItemsComponent implements OnInit{

  user : any[] = []
  constructor(private api: BackApiServiceService) { }
  ngOnInit(): void {
    // Useful for any initial set up such as fetching data
    this.api.ViewPersonalItems().subscribe(data => {
      console.log(data);
      this.user = data;
    });
}

}
