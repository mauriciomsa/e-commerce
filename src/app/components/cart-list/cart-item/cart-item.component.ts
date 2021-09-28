import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../../../models/cart-item";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  @Output() onCartItemDelete: EventEmitter<CartItem> = new EventEmitter<CartItem>()
  @Output() onUpdateQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(cartItemId: any) {
    this.onCartItemDelete.emit(cartItemId)
  }

  onDecreaseQuantityClick(cartItem: CartItem) {
    cartItem.quantity -= 1;
    cartItem.totalPrice = cartItem.quantity * cartItem.price;
    this.onUpdateQuantity.emit(cartItem)
  }

  onIncreaseQuantityClick(cartItem: CartItem) {
    cartItem.quantity += 1;
    cartItem.totalPrice = cartItem.quantity * cartItem.price;
    this.onUpdateQuantity.emit(cartItem)
  }
}
