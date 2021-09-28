import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartItem} from "../models/cart-item";
import {HttpClient} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  private cartListUrl = 'http://localhost:5000/cart-list'

  constructor(private http: HttpClient) { }

  getAllCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartListUrl)
  }

  updateQuantity(cartItem: CartItem): Observable<CartItem> {
    const url = `${this.cartListUrl}/${cartItem.id}`
    return this.http.put<CartItem>(url, cartItem, httpOptions)
  }
}
