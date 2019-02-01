import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { EmployeeComponent } from "./app.emp.component";
import { Employee } from "./app.emp.model";

// 3. Describe the test case witll all required objects
describe("EmployeeComponent", () => {
  let employee: Employee;
  let app: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let button: HTMLElement;
  // 4. Define Testing Env. for the Angular component by defining TestingModule (same as NgModule)
  // provide component comfiguration for all tests in the current test case
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EmployeeComponent]
    }).compileComponents();
    // 5. Create Component
    // initialize selector, template/templateUrl, etc. properties of component
    fixture = TestBed.createComponent(EmployeeComponent);
    // 6. Get the Component Instance
    app = fixture.componentInstance;
    // 7. Perform initial Data binding, provide an initial execution for ngModel
    fixture.detectChanges(); // trigger initial data binding
  }));

  // 8. The Actual Test

  it("should add two integers", () => {
    let x: number = 10; //arrange
    let y: number = 20; // arrange
    let res: number = 30; // arrange
    let actRes: number = app.add(x, y); // act
    expect(actRes).toEqual(res); // assert
  });

  it("should calculate tax when the button is clicked", () => {
    employee = new Employee(0, "", 0, "", "");
    employee.Designation = "Manager";
    employee.Salary = 500000;
    app.emp = employee;
    let nativeElement = fixture.nativeElement; // get the DOM element for watch (databinding, change, event)
    button = nativeElement.querySelector("button"); // get the tag from DOM based on criteria
    let actEventRes = button.dispatchEvent(new Event("click")); // reiase the click event
    fixture.detectChanges(); // check if the DOM changed (databinding)
    expect(nativeElement.querySelector("input[disabled]").value).toEqual(
      "1500"
    );
  });
});
