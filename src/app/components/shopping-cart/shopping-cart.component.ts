import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoaderService } from '../../services/loader/loader.service';
import { CartService } from '../../services/cart/cart.service';
import { ShoppingCartTileContainerComponent } from '../shopping-cart-tile-container/shopping-cart-tile-container.component';
import { OrderSummaryContainerComponent } from '../order-summary-container/order-summary-container.component';
import { ProductTile } from '../../interfaces/productTile';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    RouterLink,
    ShoppingCartTileContainerComponent,
    OrderSummaryContainerComponent,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  cartId: string = '';
  isLoading: boolean = false;
  products: Array<ProductTile> = [];
  constructor(
    private loaderService: LoaderService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cartId = localStorage.getItem('cartId') || '';
    if (this.cartId) {
      this.loaderService.isLoading.subscribe((loading) => {
        this.isLoading = loading;
      });
      this.loaderService.show();
      this.cartService
        .getAddedProducts()
        .subscribe((products: Array<ProductTile>) => {
          this.products = products;
          this.loaderService.hide();
        });
      this.cartService.removeProduct.subscribe((productId: number) => {
        if (productId) {
          this.loaderService.show();
          this.cartService
            .removeAddedProduct(productId)
            .subscribe((products) => {
              this.products = products;
              this.loaderService.hide();
            });
        }
      });
    }
  }
}
