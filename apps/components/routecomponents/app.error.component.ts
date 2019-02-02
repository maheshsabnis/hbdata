import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-error-component",
  template: `
    <h2>The Error Component</h2>
    <div class="container"><strong> The error page </strong></div>
    <input type="button" value="Back to Home" (click)="goBack()" />
  `
})
export class ErrorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(["home"]);
  }
}
