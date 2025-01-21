import { Component, Input, OnInit } from '@angular/core';
import { ProductTile } from '../../interfaces/productTile';
import { CurrencyPipe } from '@angular/common';
import { AddedProducts } from '../../interfaces/addedProducts';
import { CartService } from '../../services/cart/cart.service';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-tile',
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './shopping-cart-tile.component.html',
  styleUrl: './shopping-cart-tile.component.css',
})
export class ShoppingCartTileComponent implements OnInit {
  product: ProductTile = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  quantity: number = 0;
  totalPrice: number = 0;
  url: string = '';
  constructor(private cartService: CartService, private router: Router) {}
  @Input() set productData(product: ProductTile) {
    this.product = product;
    this.quantity = JSON.parse(localStorage.getItem('products') || '[]').filter(
      (product: AddedProducts) => product.productId === this.product.id
    )[0].quantity;
    this.totalPrice = this.product.price * this.quantity;
  }
  removeProduct(productId: number) {
    this.cartService.updateRemoveProduct(productId);
  }
  ngOnInit(): void {
    this.url = this.router.url;
  }
}
