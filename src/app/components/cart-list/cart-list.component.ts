import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../models/cart-item";
import {CartItemService} from "../../services/cart-item.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartList!: CartItem[];
  total: number = 0;

  constructor(private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.cartItemService
      .getAllCartItems()
      .subscribe((cartList: CartItem[]) => {
      this.cartList = cartList;
      this.updateTotal()
    })
  }

  updateTotal() {
    this.total = 0;

    for (let i = 0; i < this.cartList.length; i++) {
      this.total += this.cartList[i].totalPrice
    }
  }

  onDeleteCartItem(cartItemId: any): void {
    this.cartItemService
      .deleteCartItem(cartItemId)
      .subscribe(() => {
        this.cartItemService
          .getAllCartItems()
          .subscribe((cartList: CartItem[]) => {
            this.cartList = cartList;
            this.updateTotal()
          })
      })
  }

  onUpdateQuantity(cartItem: CartItem) {
    this.cartItemService
      .updateQuantity(cartItem)
      .subscribe(() => {
      this.cartItemService
        .getAllCartItems()
        .subscribe((cartList: CartItem[]) => {
        this.cartList = cartList;
        this.updateTotal()
      })
    })
  }
}
