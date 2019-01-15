import { Component, OnInit } from "@angular/core";
import { Product, Categories } from "./app.product.model";
import { ProductLogic } from "./app.product.logic";
@Component({
  selector: "app-product-component",
  templateUrl: "./app.product.view.html"
})
export class ProductComponent implements OnInit {
  // the OnInit is Component Lifecycle interface
  // this provide ngOnInit() method.
  product: Product;
  private logic: ProductLogic;
  products: Array<Product>;
  // categories locally
  categories = Categories;
  tableHeaders: Array<string>;
  constructor() {
    this.product = new Product(0, "", "", 0);
    this.logic = new ProductLogic();
    this.products = new Array<Product>();
    this.tableHeaders = new Array<string>();
  }
  // the method will be invoked immediately after ctor.
  ngOnInit(): void {
    // read all properties of Product class and push them in
    // tableHeaders array
    for (let p in this.product) {
      this.tableHeaders.push(p);
    }
    this.products = this.logic.getProducts();
  }
  clear(): void {
    this.product = new Product(0, "", "", 0);
  }
  save(): void {
    this.products = this.logic.saveProduct(this.product);
  }
  getselectedrow(p: Product): void {
    // 1. Create a deep copy of the selected product
    // 2. assign that copy to this.product
    this.product = Object.assign({}, p);
  }
}
