import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductItem } from "../models/product-item";
import {CartItem} from "../models/cart-item";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  private productListUrl = 'http://localhost:5000/product-list'
  private cartListUrl = 'http://localhost:5000/cart-list'

  constructor(private http: HttpClient) { }

  getAllProductItems():Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.productListUrl)
  }

  addToCart(cartItem: CartItem):Observable<CartItem> {
    return this.http.post<CartItem>(this.cartListUrl, cartItem, httpOptions)
  }
}
