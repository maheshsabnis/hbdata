import { Component, OnInit } from "@angular/core";
import { Department, Departments } from "./app.dept.model";
@Component({
  selector: "app-dept-component",
  template: `
    <div class="container">{{ msg }}</div>
    <table class="table table-bordered table-striped">
      <tr>
        <td>DeptNo</td>
        <td>DeptName</td>
      </tr>
      <tr *ngFor="let d of depts" (click)="selectDept(d)">
        <td>{{ d.DeptNo }}</td>
        <td>{{ d.DeptName }}</td>
      </tr>
    </table>

    <br />
    <app-emp-component
      [Dno]="dept.DeptNo"
      (empFiltered)="employeeSerachedNotificartion($event)"
    ></app-emp-component>
  `
})
export class DepartmentComponent implements OnInit {
  dept: Department;
  depts = Departments;
  msg: string;
  constructor() {
    this.dept = new Department(0, "");
    this.msg = "";
  }

  ngOnInit() {}
  selectDept(d: Department): void {
    this.dept = d;
  }
  employeeSerachedNotificartion($event: any): void {
    this.msg = $event;
  }
}
