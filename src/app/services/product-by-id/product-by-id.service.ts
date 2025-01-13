import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductTile } from '../../interfaces/productTile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductByIdService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProductData(id: number): Observable<ProductTile> {
    return this.http.get<ProductTile>(`${this.url}/${id}`);
  }
}
