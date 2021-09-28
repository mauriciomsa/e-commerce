import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductItem} from "../../../models/product-item";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductItem;
  @Output() onAddToCart: EventEmitter<ProductItem> = new EventEmitter<ProductItem>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(product: ProductItem):void {
    this.onAddToCart.emit(product)
  }

}
