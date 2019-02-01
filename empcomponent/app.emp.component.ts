import { Component, OnInit } from "@angular/core";
import {
  Employee,
  Departments,
  Designations,
  EmployeeBizAction
} from "./app.emp.model";

@Component({
  selector: "app-emp-component",
  templateUrl: "./app.emp.view.html"
})
// onInit interface is used to manage default Lifecycle of Component
export class EmployeeComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  empObj: EmployeeBizAction;
  depts = Departments;
  desigs = Designations;
  tableColHeaders: Array<string>;
  constructor() {
    this.emp = new Employee(0, "", 0, "", "");
    this.emp.Tax = 0;
    this.emps = new Array<Employee>();
    this.empObj = new EmployeeBizAction();
    this.tableColHeaders = new Array<string>();
  }
  // the method invoked immediately after constructor
  // used to contain the logic which may delay COnstructor execution e.g. Service call
  ngOnInit() {
    this.emps = this.empObj.employees;
    for (let c in this.emp) {
      this.tableColHeaders.push(c);
    }
  }
  clear(): void {
    this.emp = new Employee(0, "", 0, "", "");
  }
  save(): void {
    this.emps = this.empObj.addEmployee(this.emp);
    this.getTax();
  }
  add(x: number, y: number): number {
    return x + y;
  }

  getTax(): number {
    if (this.emp.Designation === "Manager") {
      this.emp.Tax = this.emp.Salary * 0.3;
    }
    if (this.emp.Designation === "Lead") {
      this.emp.Tax = this.emp.Salary * 0.25;
    }

    return this.emp.Tax;
  }
  getSelectedEmp(e: Employee): void {
    // create a Deep-Copy of e using
    // object.assign
    this.emp = Object.assign({}, e);
  }
}
