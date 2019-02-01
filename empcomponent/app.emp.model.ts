export class Employee {
    constructor(
        public EmpNo:number,
        public EmpName:string,
        public Salary:number,
        public DeptName:string,
        public Designation:string
    ) {}
    public Tax:number;
}

export const Departments:Array<string>=
        ["IT","HRD","System","Accounts"];
export const Designations:Array<string>=
        ["Lead","Manager","Engineer","Developer"];

export class EmployeeBizAction {
    employees:Array<Employee>;
    constructor() {
        this.employees = new Array<Employee>();
        this.employees.push(new Employee(101,"Mahesh",123456,"IT","Manager"));
        this.employees.push(new Employee(102,"Ajay",222456,"HRD","Manager"));
    }
    addEmployee(emp:Employee):Array<Employee> {
        this.employees.push(emp);
        return this.employees;
    }
    // method to Update EMployee
        // search Record from Array
        // store records in in Temp Emp object
        // delete the record from array
        // update Temp Emp Object
        // push Temp Emp Object in Array
    // method to Delete Employee
         // search Record from Array
         // delete the record from array
}

