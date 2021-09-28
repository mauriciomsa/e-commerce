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

  constructor() { }

  ngOnInit(): void {
  }

  onClick(cartItemId: any) {
    this.onCartItemDelete.emit(cartItemId)
  }
}
