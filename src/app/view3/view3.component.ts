import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../services/travel-app.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.scss']
})
export class View3Component implements OnInit {
  public travelAppArticlesSource1: any = null;
  public northwindOrders: any = null;
  public northwindCustomers: any = null;

  constructor(
    private travelAppService: TravelAppService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Orders').subscribe(data => this.northwindOrders = data);
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.travelAppService.getData('Articles Source 1').subscribe(data => this.travelAppArticlesSource1 = data);
  }
}
