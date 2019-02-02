import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directive-component",
  template: `
    <table class="table table-bordered table-striped">
      <tr>
        <td><input type="radio" name="r" (click)="color = 'red'" /> Red</td>
        <td><input type="radio" name="r" (click)="color = 'blue'" /> Blue</td>
        <td>
          <input type="radio" name="r" (click)="color = 'yellow'" /> Yellow
        </td>
      </tr>
    </table>

    <hr />
    <div class="container" [setColor]="color">The first div</div>
    <br />
    <div class="container" [setColor]="color">The second div</div>
    <br />
    <div class="container" [setColor]="color">The third div</div>
  `
})
export class DirectiveComponent implements OnInit {
  color: string;
  constructor() {
    this.color = "";
  }

  ngOnInit(): void {}
}
