import { Component, OnInit } from '@angular/core';
import { ProductItem } from "../../models/product-item";
import { ProductItemService } from "../../services/product-item.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productItems!: ProductItem[]

  constructor(private productItemService: ProductItemService) { }

  ngOnInit(): void {
    this.productItemService.getItems().subscribe((products: ProductItem[]) => {
      this.productItems = products;
    })
  }

}
