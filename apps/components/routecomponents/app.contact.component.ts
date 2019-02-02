import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-component",
  template: `
    <h2>Contact Component</h2>
    <div class="container">{{ message }}</div>
    <br />
  `
})
export class ContactComponent implements OnInit {
  message: string;
  constructor() {
    this.message = "I am Contact Component";
  }

  ngOnInit(): void {}
}
