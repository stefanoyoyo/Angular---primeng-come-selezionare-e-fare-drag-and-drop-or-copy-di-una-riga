import { Component, OnInit } from "@angular/core";
import { ProductService } from "./productservice";
import { Product } from "./product";
import { differenceBy } from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  availableProducts: Product[] = [];
  draggedProducts: Product[] = [];
  selectedProducts: Product[] = [];

  cols: any[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then(data => (this.availableProducts = data));

    this.cols = [{ field: "name", header: "Name" }];
  }

  drop() {
    this.selectedProducts = [...this.selectedProducts, ...this.draggedProducts];
    console.log('on drop')
    console.log('this.selectedProducts')
    console.log(this.selectedProducts)
    // this.availableProducts = differenceBy(
    //   this.availableProducts,
    //   this.draggedProducts,
    //   "code"
    // );
  }

  dragStart(data) {
    console.log("drag startt");
  }
  dragEnd() {
    console.log("drag end");

    this.drop();
    this.draggedProducts = [];
  }
}
