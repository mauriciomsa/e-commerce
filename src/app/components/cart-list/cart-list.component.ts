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

  constructor(private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.cartItemService
      .getAllCartItems()
      .subscribe((cartList: CartItem[]) => {
      this.cartList = cartList;
    })
  }

  onDeleteCartItem(cartItemId: any): void {
    this.cartItemService
      .deleteCartItem(cartItemId)
      .subscribe(() => {
        this.cartItemService
          .getAllCartItems()
          .subscribe((cartList: CartItem[]) => {
            this.cartList = cartList;
          })
      })
  }

}
