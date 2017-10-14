import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MortgageCalculatorComponent} from './mortgage-calculator/mortgage-calculator.component';
import {AmortizationChartComponent} from './amortization-chart/amortization-chart.component';
import { MoneyFormatPipe } from './shared/pipes/money-format.pipe';
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MortgageCalculatorComponent,
    AmortizationChartComponent,
    MoneyFormatPipe,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
