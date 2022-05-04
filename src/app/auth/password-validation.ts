import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password = control.parent?.get('password');
    let confirmPassword = control.value;
    if(password && confirmPassword){
      return password?.value != confirmPassword ? {noMatch: {value: control.value}} : null;
    }
    return null;
  }
}
