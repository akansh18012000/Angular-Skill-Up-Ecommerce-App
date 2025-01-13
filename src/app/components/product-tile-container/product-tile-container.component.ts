import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import { ProductTile } from '../../interfaces/productTile';
import { ProductsService } from '../../services/products/products.service';
import { LoaderService } from '../../services/loader/loader.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-tile-container',
  imports: [ProductTileComponent],
  templateUrl: './product-tile-container.component.html',
  styleUrl: './product-tile-container.component.css',
})
export class ProductTileContainerComponent implements OnInit, OnDestroy {
  category: string = '';
  products: ProductTile[] = [];
  isLoading: boolean = true;
  routeSubscription: Subscription = new Subscription();
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private loaderService: LoaderService
  ) {}
  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
    const currentUrl = this.router.url;
    this.category = currentUrl
      .replace('-', ' ')
      .replace('/', '')
      .replace('jewelery', 'jewellery')
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    this.category = this.category || "Men's Clothing";
    this.productsService
      .getProductsData(currentUrl.replace('-', ' ').replace('/', ''))
      .subscribe((products) => {
        this.products = products;
        this.loaderService.hide();
      });
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        this.category = url
          .replace('-', ' ')
          .replace('/', '')
          .replace('jewelery', 'jewellery')
          .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
        this.category = this.category || "Men's Clothing";
        this.productsService
          .getProductsData(url.replace('-', ' ').replace('/', ''))
          .subscribe((products) => {
            this.products = products;
            this.loaderService.hide();
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
