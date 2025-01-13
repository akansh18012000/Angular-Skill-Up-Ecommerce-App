import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin, BehaviorSubject } from 'rxjs';
import { AddedProducts } from '../../interfaces/addedProducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = 'https://fakestoreapi.com/products';

  private totalItemsSubject = new BehaviorSubject<number>(
    Number(localStorage.getItem('totalItems')) || 0
  );
  private totalPriceSubject = new BehaviorSubject<number>(
    Number(localStorage.getItem('totalPrice')) || 0
  );
  private removeProductSubject = new BehaviorSubject<number>(0);
  totalItems = this.totalItemsSubject.asObservable();
  totalPrice = this.totalPriceSubject.asObservable();
  removeProduct = this.removeProductSubject.asObservable();

  constructor(private http: HttpClient) {}

  updateTotalItems(totalItems: number) {
    this.totalItemsSubject.next(totalItems);
  }

  updateTotalPrice(totalPrice: number) {
    this.totalPriceSubject.next(totalPrice);
  }

  updateRemoveProduct(productId: number) {
    this.removeProductSubject.next(productId);
  }

  getAddedProducts(): Observable<any> {
    const productUrls = JSON.parse(
      localStorage.getItem('products') || '[]'
    ).map((product: AddedProducts) => `${this.baseUrl}/${product.productId}`);
    if (productUrls.length === 0) {
      return of([]); // Return an observable of an empty array
    }
    return forkJoin(productUrls.map((url: string) => this.http.get(url)));
  }

  removeAddedProduct(productId: number): Observable<any> {
    let products: Array<AddedProducts> = JSON.parse(
      localStorage.getItem('products') || '[]'
    );
    products = products.filter(
      (product: AddedProducts) => product.productId !== productId
    );
    const totalItems = products.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    const totalPrice = products.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
    if (products.length) {
      localStorage.setItem('products', JSON.stringify(products));
      localStorage.setItem('totalItems', JSON.stringify(totalItems));
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
      this.updateTotalItems(totalItems);
      this.updateTotalPrice(totalPrice);
    } else {
      localStorage.clear();
      this.updateTotalItems(0);
      this.updateTotalPrice(0);
    }

    return this.getAddedProducts();
  }
}
