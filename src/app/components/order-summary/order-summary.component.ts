import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [CurrencyPipe],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
})
export class OrderSummaryComponent implements OnInit {
  totalItems: number = 0;
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.totalItems.subscribe((totalItems) => {
      this.totalItems = totalItems;
    });
    this.cartService.totalPrice.subscribe((totalPrice) => {
      this.totalPrice = totalPrice;
    });
  }
}
