import { Component, OnInit } from '@angular/core';
import { ProductItem } from "../../models/product-item";
import { ProductItemService } from "../../services/product-item.service";
import {CartItem} from "../../models/cart-item";
import {CartItemService} from "../../services/cart-item.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList!: ProductItem[];
  cartItem!: CartItem;

  constructor(
    private productItemService: ProductItemService,
    private cartItemService: CartItemService
  ) { }

  ngOnInit(): void {
    this.productItemService
      .getAllProductItems()
      .subscribe((productList: ProductItem[]) => {
        this.productList = productList;
      })
  }

  setCartItem(productItem: ProductItem) {
    let quantity: number = 1;
    let id: any;

    this.cartItemService
      .getAllCartItems()
      .subscribe((cartList: CartItem[]) => {
        for (let i = 0; i < cartList.length; i++) {
          if (cartList[i].productId === productItem.id) {
            id = cartList[i].id;
            quantity += cartList[i].quantity;
            break;
          }
        }

        if (quantity > 10) return;

        this.cartItem = {
          id: id,
          productId: productItem.id,
          quantity: quantity,
          totalPrice: productItem.price * quantity,
          name: productItem.name,
          description: productItem.description,
          price: productItem.price
        }
        this.addToCart()
      })
  }

  addToCart(): void {
    if (this.cartItem.quantity === 1) {
      this.productItemService
        .addToCart(this.cartItem)
        .subscribe()
    } else {
      this.updateCartItemQuantity()
    }
  }

  updateCartItemQuantity() {
    this.cartItemService
      .updateQuantity(this.cartItem)
      .subscribe()
  }
}

