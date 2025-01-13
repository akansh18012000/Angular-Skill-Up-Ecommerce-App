import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductTile } from '../../interfaces/productTile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'https://fakestoreapi.com/products/category';

  constructor(private http: HttpClient) {}

  getProductsData(category: string): Observable<ProductTile[]> {
    return this.http.get<ProductTile[]>(
      `${this.url}/${category || "men's clothing"}`
    );
  }
}
