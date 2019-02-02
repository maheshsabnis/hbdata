export class Department {
  constructor(public DeptNo: number, public DeptName: string) {}
}

export const Departments: Array<Department> = new Array<Department>();
Departments.push(new Department(101, "D1"));
Departments.push(new Department(102, "D2"));
Departments.push(new Department(103, "D3"));
