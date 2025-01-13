import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductTile } from '../../interfaces/productTile';

@Component({
  selector: 'app-product-tile',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css',
})
export class ProductTileComponent {
  @Input() product: ProductTile = {
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
}
