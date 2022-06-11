import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../models/authentication-request/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response/authentication-response';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  displayPassword: Boolean;

  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.displayPassword = false;
  }

  changeVisibility(){
    this.displayPassword = !this.displayPassword
  }
  loginForm = this.formBuilder.group({
    email: new FormControl('',Validators.compose([Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    ),
    password: new FormControl('',Validators.compose([
      Validators.required,
      Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$")])
    ),
  });

  register(){
    this.router.navigateByUrl("/register");
  }
  onSubmit(){
    let authCredentials = new AuthenticationRequest(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value)
    this.userService.logIn(authCredentials).subscribe(
      (data: AuthenticationResponse)=> {
        console.log(JSON.stringify(data));
        sessionStorage.setItem('authToken',data.jwt);
        window.alert("Successfully logged in");
        window.location.reload();
       }
     );
  }

}
