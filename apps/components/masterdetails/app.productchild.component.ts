import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProductData, Products } from "./../../models/app.newproduct.models";
@Component({
  selector: "app-productchild-component",
  template: `
    <input
      type="button"
      value="Notify Back"
      class="btn btn-warning"
      (click)="onNotifyToParent()"
    />
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Product Id</td>
          <td>Product Name</td>
          <td>Cat Id</td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let p of FilterProducts">
          <td>{{ p.ProdId }}</td>
          <td>{{ p.ProdName }}</td>
          <td>{{ p.CatId }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class ProductChildComponent implements OnInit {
  prd: ProductData;
  prds = Products;
  _FilterProducts: Array<ProductData>;
  _CatId: number;
  @Output()
  notifyToParent: EventEmitter<string>;
  constructor() {
    this.prd = new ProductData(0, "", 0);
    this._CatId = 0;
    this._FilterProducts = Array<ProductData>();
    this.notifyToParent = new EventEmitter<string>();
  }
  @Input("CatId")
  set CatId(val: number) {
    this._CatId = val;
  }
  get CatId(): number {
    return this._CatId;
  }

  onNotifyToParent(): void {
    this.notifyToParent.emit(
      `We found ${this._FilterProducts.length} products against CatId as ${
        this._CatId
      }`
    );
  }

  get FilterProducts(): Array<ProductData> {
    this._FilterProducts = new Array<ProductData>();
    if (this.CatId > 0) {
      this._FilterProducts = this.prds.filter((p: ProductData) => {
        return p.CatId === this.CatId;
      });
      console.log(JSON.stringify(this._FilterProducts));

      return this._FilterProducts;
    } else {
      console.log(JSON.stringify(this._FilterProducts));
      return this._FilterProducts;
    }
  }
  ngOnInit(): void {
    console.log();
  }
}
