import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryContainerComponent } from './order-summary-container.component';

describe('OrderSummaryContainerComponent', () => {
  let component: OrderSummaryContainerComponent;
  let fixture: ComponentFixture<OrderSummaryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSummaryContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
