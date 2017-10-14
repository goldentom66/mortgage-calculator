import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {
  principal: number;
  years: number;
  rate: number;

  payment: any;

  constructor() {
  }

  ngOnInit() {
    this.principal = 200000;
    this.years = 30;
    this.rate = 5;
    this.calculatePayment(null);
  }

  calculatePayment(event): any {
    if (event) {
      this[event.target.id] = event.target.value;
    }

    let monthlyRate = this.rate / 100 / 12;
    let monthlyPayment = this.principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), this.years * 12)));
    let balance = this.principal;
    let amortization = [];
    for (let y = 0; y < this.years; y++) {
      let interestY = 0;  //Interest payment for year y
      let principalY = 0; //Principal payment for year y
      for (let m = 0; m < 12; m++) {
        let interestM = balance * monthlyRate;       //Interest payment for month m
        let principalM = monthlyPayment - interestM; //Principal payment for month m
        interestY = interestY + interestM;
        principalY = principalY + principalM;
        balance = balance - principalM;
      }
      amortization.push({principalY: principalY, interestY: interestY, balance: balance});
    }
    this.payment = {monthlyPayment: monthlyPayment, amortization: amortization};
  }
}
