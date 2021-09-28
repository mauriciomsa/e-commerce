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
  cartList!: CartItem[];
  cartItem!: CartItem;

  constructor(
    private productItemService: ProductItemService,
    private cartItemService: CartItemService
  ) { }

  ngOnInit(): void {
    this.productItemService
      .getAllProductItems()
      .subscribe((products: ProductItem[]) => {
        this.productList = products;
      })
  }

  setCartItem(productItem: ProductItem) {
    let quantity: number = 1;
    let id: any;

    this.cartItemService
      .getAllCartItems()
      .subscribe((products: CartItem[]) => {
        for (let i = 0; i < products.length; i++) {
          if (products[i].productId === productItem.id) {
            id = products[i].id;
            quantity += products[i].quantity;
            break;
          }
        }
        this.cartItem = {
          id: id,
          productId: productItem.id,
          quantity: quantity,
          name: productItem.name,
          description: productItem.description,
          price: productItem.price * quantity
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

