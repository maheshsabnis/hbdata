import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Employee, Employees } from "./app.emp.model";
@Component({
  selector: "app-emp-component",
  template: `
    <table class="table table-striped table-bordered">
      <tr>
        <td>EmpNo</td>
        <td>EmpName</td>
        <td>DeptNo</td>
      </tr>
      <tr *ngFor="let e of Eps">
        <td>{{ e.EmpNo }}</td>
        <td>{{ e.EmpName }}</td>
        <td>{{ e.DeptNo }}</td>
      </tr>
    </table>

    <input type="button" value="Notify" (click)="onEmpFiltered()" />
  `
})
export class EmployeeComponent implements OnInit {
  emp: Employee;
  emps = Employees;
  private dno: number;
  private eps: Array<Employee>;
  @Output()
  empFiltered: EventEmitter<string>;
  constructor() {
    this.dno = 0;
    this.eps = new Array<Employee>();
    this.empFiltered = new EventEmitter<string>();
  }
  // decorate the setter as Input, so that
  // 1. it will be exposed for [PropertyBinding]
  // 2. it will make the component update itself
  // 3.. all properties depending on Dno will be updated
  @Input()
  set Dno(v: number) {
    this.dno = v;
    console.log(this.dno);
  }

  get Dno(): number {
    return this.dno;
  }

  onEmpFiltered(): void {
    let message: string = `Searched Employee for DeptNo ${this.Dno} are ${
      this.eps.length
    }`;
    this.empFiltered.emit(message);
  }

  ngOnInit() {}

  get Eps(): Array<Employee> {
    this.eps = new Array<Employee>();
    if (this.dno > 0) {
      this.eps = this.emps.filter(e => {
        return e.DeptNo === this.dno;
      });
    } else {
      this.eps = this.emps;
    }
    return this.eps;
  }
}
