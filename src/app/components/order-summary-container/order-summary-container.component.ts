import { Component, OnInit } from '@angular/core';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { CheckoutFormValidationService } from '../../services/checkout-form-validation/checkout-form-validation.service';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-summary-container',
  imports: [RouterLink, OrderSummaryComponent],
  templateUrl: './order-summary-container.component.html',
  styleUrl: './order-summary-container.component.css',
})
export class OrderSummaryContainerComponent implements OnInit {
  url: string = '';
  constructor(
    private router: Router,
    private checkoutFormValidation: CheckoutFormValidationService
  ) {}
  ngOnInit(): void {
    this.url = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }
  handlePlaceOrder(): void {
    this.checkoutFormValidation.updateFormSubmitted(true);
  }
}
