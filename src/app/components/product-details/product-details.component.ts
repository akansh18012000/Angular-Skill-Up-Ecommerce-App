import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductTile } from '../../interfaces/productTile';
import { AddedProducts } from '../../interfaces/addedProducts';
import { ProductByIdService } from '../../services/product-by-id/product-by-id.service';
import { LoaderService } from '../../services/loader/loader.service';
import { CartService } from '../../services/cart/cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
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
  isLoading: boolean = true;
  handleAddToCart(id: number, price: number) {
    // Cart Id
    if (!localStorage.getItem('cartId')) {
      localStorage.setItem('cartId', crypto.randomUUID());
    }
    // Products
    if (!localStorage.getItem('products')) {
      localStorage.setItem(
        'products',
        JSON.stringify([{ productId: id, quantity: 1, price: price }])
      );
    } else {
      let products: Array<AddedProducts> = JSON.parse(
        localStorage.getItem('products') || '[]'
      );
      let productIndex = products.findIndex(
        (product: AddedProducts) => product.productId === id
      );
      if (productIndex === -1) {
        products.push({ productId: id, quantity: 1, price: price });
      } else {
        products[productIndex].quantity += 1;
      }
      localStorage.setItem('products', JSON.stringify(products));
    }
    // Total Items and Total Price
    if (localStorage.getItem('products')) {
      const totalItems = JSON.parse(
        localStorage.getItem('products') || '[]'
      ).reduce(
        (acc: number, product: AddedProducts) => acc + product.quantity,
        0
      );
      const totalPrice = JSON.parse(
        localStorage.getItem('products') || '[]'
      ).reduce(
        (acc: number, product: AddedProducts) =>
          acc + product.quantity * product.price,
        0
      );
      localStorage.setItem('totalItems', totalItems.toString());
      localStorage.setItem('totalPrice', totalPrice.toString());
      this.cartService.updateTotalItems(totalItems);
      this.cartService.updateTotalPrice(totalPrice);
    }
  }

  paramSubscription: Subscription = new Subscription();

  constructor(
    private productByIdService: ProductByIdService,
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
    this.paramSubscription = this.activatedRoute.params.subscribe((params) => {
      this.productByIdService
        .getProductData(Number(params['id']))
        .subscribe((product) => {
          this.product = product;
          this.loaderService.hide();
        });
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
