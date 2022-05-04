import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user-service/user.service';
import { Validators } from '@angular/forms';
import { passwordMatch} from '../auth/password-validation';
import { RegisterUser } from '../models/register-user/register-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private router:Router){ }

  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
    email: new FormControl('',Validators.compose([Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    ),
    password: new FormControl('',Validators.compose([
      Validators.required,
      Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$")])
    ),
    repeatPassword: new FormControl('',Validators.compose([
      Validators.required,
      Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"),
      passwordMatch()])
      ),
  });

  test(){
    return this.registerForm.controls;
  }

  onSubmit(){
    let newUser = new RegisterUser(this.registerForm.get('email')?.value,this.registerForm.get('password')?.value);
    this.userService.registerUser(newUser);
    window.alert("Successfully registered user!")
    this.router.navigateByUrl("/login");
  }
}
