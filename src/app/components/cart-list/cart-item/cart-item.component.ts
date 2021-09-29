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

  onDelete(cartItemId: any) {
    this.onCartItemDelete.emit(cartItemId)
  }

  onDecreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity === 1) this.onDelete(cartItem.id);
    cartItem.quantity -= 1;
    cartItem.totalPrice = cartItem.quantity * cartItem.price;
    this.onUpdateQuantity.emit(cartItem)
  }

  onIncreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity === 10) return;
    cartItem.quantity += 1;
    cartItem.totalPrice = cartItem.quantity * cartItem.price;
    this.onUpdateQuantity.emit(cartItem)
  }
}
