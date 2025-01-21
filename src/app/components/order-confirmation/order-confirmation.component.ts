import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { ShoppingCartTileContainerComponent } from '../shopping-cart-tile-container/shopping-cart-tile-container.component';
import { CartService } from '../../services/cart/cart.service';
import { LoaderService } from '../../services/loader/loader.service';
import { ProductTile } from '../../interfaces/productTile';

@Component({
  selector: 'app-order-confirmation',
  imports: [
    RouterModule,
    OrderSummaryComponent,
    ShoppingCartTileContainerComponent,
  ],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css',
})
export class OrderConfirmationComponent implements OnInit {
  isLoading: boolean = false;
  products: Array<ProductTile> = [];
  shippingDetails: any =
    JSON.parse(localStorage.getItem('shipping-details') || '') || {};
  constructor(
    private loaderService: LoaderService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
    this.loaderService.show();
    this.cartService
      .getAddedProducts()
      .subscribe((products: Array<ProductTile>) => {
        this.products = products;
        this.loaderService.hide();
        setTimeout(() => {
          localStorage.clear();
        }, 500);
      });
  }
}
