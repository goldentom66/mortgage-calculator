import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AmortizationChartComponent} from './amortization-chart.component';

describe('AmortizationChartComponent', () => {
  let component: AmortizationChartComponent;
  let fixture: ComponentFixture<AmortizationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmortizationChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmortizationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
