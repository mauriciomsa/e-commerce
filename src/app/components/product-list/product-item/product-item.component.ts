import {Component, Input, OnInit} from '@angular/core';
import {ProductItem} from "../../../models/product-item";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductItem;

  constructor() { }

  ngOnInit(): void {
  }

}
