import { Component } from "@angular/core";

@Component({
  selector: "app-simple-component",
  template: `
    <h2>Hi I am First Angular Component!!!!@@@@$$$$</h2>
    <div class="container">
      <strong>{{ message }}</strong>
    </div>
    <br />
    <div class="container">{{ 10 + 20 }}</div>
    <br />
    <input type="text" class="form-control" [value]="message" /> <br />
    <a [href]="url">DevCurry</a> <br />
    <input
      type="button"
      class="btn btn-success"
      value="click me"
      (click)="print()"
    />
    <br />
    <input type="text" class="form-control" [(ngModel)]="fullName" /> <br />
    <input type="text" class="form-control" [(ngModel)]="fullName" /> <br />
    <input type="text" class="form-control" [(ngModel)]="fullName" /> <br />
  `
})
export class SimpleComponent {
  message: string;
  name: string;
  url: string;
  fullName: string;
  constructor() {
    this.message = "Hello Angular 7, why r u in hurry for versions?";
    this.name = "James Bond";
    this.url = "http://www.devcurry.com";
  }
  print(): void {
    this.message = "hay!!button is clicked!!";
  }
}
