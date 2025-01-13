import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { OrderSummaryContainerComponent } from '../order-summary-container/order-summary-container.component';

@Component({
  selector: 'app-checkout',
  imports: [
    RouterModule,
    MatIconModule,
    CheckoutFormComponent,
    OrderSummaryContainerComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  constructor() {}
}
