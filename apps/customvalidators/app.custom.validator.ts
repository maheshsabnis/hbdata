import { AbstractControl } from "@angular/forms";

export class NumericNonNegativeValidator {
  // 1. static method
  // 2. i/p parameter must be used carefully
  // 3. return type is "any"
  static checkVal(ctrl: AbstractControl): any {
    if (parseInt(ctrl.value) > 0) {
      return null; // valid
    } else {
      return { invalid: true }; // imvalid
    }
  }
}
