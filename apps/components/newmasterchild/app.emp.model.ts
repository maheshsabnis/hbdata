export class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string,
    public DeptNo: number
  ) {}
}

export const Employees: Array<Employee> = new Array<Employee>();
Employees.push(new Employee(1, "A", 101));
Employees.push(new Employee(2, "B", 102));
Employees.push(new Employee(3, "C", 103));
Employees.push(new Employee(4, "D", 101));
Employees.push(new Employee(5, "E", 102));
Employees.push(new Employee(6, "F", 103));
