import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-amortization-chart',
  templateUrl: './amortization-chart.component.html',
  styleUrls: ['./amortization-chart.component.css']
})
export class AmortizationChartComponent implements OnInit {
  @Input() data : any[];
  yearData : any[];

  constructor() {
  }

  ngOnInit() {
    this.yearData = this.data.map(function(dataItem, index) {
      var yearDataItem = dataItem;
      yearDataItem.index = index + 1;
      yearDataItem.principalString = Math.round(dataItem.principalY).toLocaleString();
      yearDataItem.interestString = Math.round(dataItem.interestY).toLocaleString();
      yearDataItem.balanceString = Math.round(dataItem.balance).toLocaleString();
      return yearDataItem;
    });
  }

}
