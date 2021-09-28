import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductItem } from "../models/product-item";

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  private url = 'http://localhost:5000/product-list'

  constructor(private http: HttpClient) { }

  getItems():Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.url)
  }
}
