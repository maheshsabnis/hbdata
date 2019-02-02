import { Component, OnInit, Input } from "@angular/core";
import { ProductData, Products } from "./../../models/app.newproduct.models";
import { CommunicationService } from "./../../services/app.communication.service";
@Component({
  selector: "app-productchildreceiver-component",
  template: `
    <table class="table table-bordered table-striped">
      <tr>
        <td>PrdId</td>
        <td>PrdName</td>
        <td>CtaId</td>
      </tr>
      <tbody>
        <tr *ngFor="let p of FilteredProducts">
          <td>{{ p.ProdId }}</td>
          <td>{{ p.ProdName }}</td>
          <td>{{ p.CatId }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class ProductChildReceiverComponent implements OnInit {
  prd: ProductData;
  prds = Products;
  CatId: number;

  private _FilteredProducts: Array<ProductData>;

  constructor(private serv: CommunicationService) {
    this.CatId = 0;
    this._FilteredProducts = new Array<ProductData>();
  }

  // subscibe to an event emitted by the service
  // this is one-time subscription
  ngOnInit(): void {
    this.serv.emitData.subscribe((id: number) => {
      this.CatId = id;
    });
  }

  // the readonly property to filter the data

  get FilteredProducts(): Array<ProductData> {
    this._FilteredProducts = new Array<ProductData>();
    if (this.CatId > 0) {
      this.prds.forEach((p, idx) => {
        if (p.CatId === this.CatId) {
          this._FilteredProducts.push(p);
        }
      });
      console.log("if" + JSON.stringify(this._FilteredProducts));
      return this._FilteredProducts;
    }
    this._FilteredProducts = this.prds;

    console.log(JSON.stringify(this._FilteredProducts));
    return this._FilteredProducts;
  }
}
