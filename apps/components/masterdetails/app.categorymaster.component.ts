import { Component, OnInit } from "@angular/core";
import { Category, Categories } from "./../../models/app.category.model";
@Component({
  selector: "app-categorymaster-component",
  template: `
    <div class="container">{{ message }}</div>
    <table class="table table-bordered table-striped">
      <tr>
        <td>CatId</td>
        <td>CategoryName</td>
      </tr>
      <tbody>
        <tr *ngFor="let c of cats" (click)="getSelectedCat(c)">
          <td>{{ c.CatId }}</td>
          <td>{{ c.CategoryName }}</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <app-productchild-component
      [CatId]="cat.CatId"
      (notifyToParent)="getNotified($event)"
    ></app-productchild-component>
  `
})
export class CategoryMasterComponent implements OnInit {
  cat: Category;
  cats = Categories;
  message: string;
  constructor() {
    this.cat = new Category(0, "");
    this.message = "";
  }

  ngOnInit(): void {
    console.log();
  }

  getNotified($event: any): void {
    this.message = `Received ${$event}`;
  }

  getSelectedCat(c: Category): void {
    this.cat = c;
  }
}
