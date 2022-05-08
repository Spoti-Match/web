import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRouting } from 'src/utils/httpRouting';
import { AuthenticationRequest } from '../models/authentication-request/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getToken(credentials: AuthenticationRequest){
    this.http.post<AuthenticationResponse>(HttpRouting.backEndBase + "/auth",credentials).subscribe(
      (data: AuthenticationResponse)=> {
        sessionStorage.setItem('authToken',data.jwt);
      }
    )
  }

  getTest(){
    this.http.get<String>(HttpRouting.backEndBase + "/").subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
