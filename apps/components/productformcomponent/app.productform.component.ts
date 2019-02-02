import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Product, Categories } from "./app.product.model";
import { ProductLogic } from "./app.product.logic";
import { NumericNonNegativeValidator } from "./../../customvalidators/app.custom.validator";
@Component({
  selector: "app-productform-component",
  templateUrl: "./app.productform.view.html"
})
export class ProductFormComponent implements OnInit {
  // the OnInit is Component Lifecycle interface
  // this provide ngOnInit() method.
  product: Product;
  private logic: ProductLogic;
  products: Array<Product>;
  isSaved: boolean;
  // categories locally
  categories = Categories;
  tableHeaders: Array<string>;
  // define FormGroup
  frmProduct: FormGroup;
  constructor() {
    this.product = new Product(0, "", "", 0);
    this.logic = new ProductLogic();
    this.products = new Array<Product>();
    this.tableHeaders = new Array<string>();
    this.isSaved = false;
    // define an instance of FormGroup and map property of mode class
    // i.e. Product class with FormControl
    this.frmProduct = new FormGroup({
      ProductId: new FormControl(
        this.product.ProductId,
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]+"),
          Validators.minLength(2),
          Validators.maxLength(5)
        ])
      ),
      ProductName: new FormControl(this.product.ProductName),
      CategoryName: new FormControl(this.product.CategoryName),
      Price: new FormControl(
        this.product.Price,
        Validators.compose([NumericNonNegativeValidator.checkVal])
      )
    });
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
    // read form values using "formControlName" under fromGroup
    this.product = this.frmProduct.value;
    this.products = this.logic.saveProduct(this.product);
    this.isSaved = false;
  }
  loadForm(): void {
    this.product = new Product(0, "", "", 0);
    this.isSaved = true;
  }
  getselectedrow(p: Product): void {
    // 1. Create a deep copy of the selected product
    // 2. assign that copy to this.product
    this.product = Object.assign({}, p);
  }
}
