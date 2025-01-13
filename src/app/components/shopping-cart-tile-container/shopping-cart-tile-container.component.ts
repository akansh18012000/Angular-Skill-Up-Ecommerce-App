import { Component, Input } from '@angular/core';
import { ShoppingCartTileComponent } from '../shopping-cart-tile/shopping-cart-tile.component';
import { ProductTile } from '../../interfaces/productTile';

@Component({
  selector: 'app-shopping-cart-tile-container',
  imports: [ShoppingCartTileComponent],
  templateUrl: './shopping-cart-tile-container.component.html',
  styleUrl: './shopping-cart-tile-container.component.css',
})
export class ShoppingCartTileContainerComponent {
  @Input() products: Array<ProductTile> = [];
}
