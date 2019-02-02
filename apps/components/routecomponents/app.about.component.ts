import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-about-component",
  template: `
    <h2>About Component</h2>
    <div class="container">{{ message }}</div>
    <br />
    <div class="container">The Value is:{{ value }}</div>
    <br />
    <input
      type="button"
      value="Navigate to Contact"
      (click)="navigateToContact()"
    />
  `
})
export class AboutComponent implements OnInit {
  message: string;
  value: number;
  // the injection of Router and ActivatedRoute will fetch Router object
  // from RouterModule imported in NgModule using "routing"
  constructor(private router: Router /*, private act: ActivatedRoute*/) {
    this.message = "I am About Component";
  }
  // explicitely routed to contact
  navigateToContact(): void {
    this.router.navigate(["contact"]);
  }
  // subscribe to parameters from ActivatedRoute object
  ngOnInit(): void {
    // this.act.params.subscribe(params => {
    //   this.value = params.id;
    // });
  }
}
