import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../services/financial-data.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public financialDataFinTable: any = null;

  constructor(
    private financialDataService: FinancialDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialDataService.getFinTable().subscribe(data => this.financialDataFinTable = data);
  }
}
