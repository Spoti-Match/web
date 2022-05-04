import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRouting } from 'src/utils/httpRouting';
import { AuthenticationRequest } from '../models/authentication-request/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response/authentication-response';
import { RegisterUser } from '../models/register-user/register-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getToken(credentials: AuthenticationRequest){
    return this.http.post<AuthenticationResponse>(HttpRouting.backEndBase + "/auth",credentials)
  }

  registerUser(credentials: RegisterUser){
    this.http.post<RegisterUser>(HttpRouting.backEndBase + "/register",credentials).subscribe()
  }

  isLoggedIn(){
    return sessionStorage.getItem("authToken") != null;
  }


  logIn(credentials: AuthenticationRequest){
    return this.getToken(credentials);
  }


  logOut(){
    sessionStorage.removeItem("authToken");
    alert("Successfully logged out");
  }


  getTest(){
    this.http.get<String>(HttpRouting.backEndBase + "/").subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
