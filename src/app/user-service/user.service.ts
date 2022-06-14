import {HttpClient, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRouting } from 'src/utils/httpRouting';
import { AuthenticationRequest } from '../models/authentication-request/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response/authentication-response';
import { RegisterUser } from '../models/register-user/register-user';
import { UserDetails } from '../models/userDetails/userDetails';
import {User} from "../models/User/user";
import {Observable, pairs} from "rxjs";
import {ProfileBrowsingComponent} from "../profile-browsing/profile-browsing.component";


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


  getPairs(){
    return this.http.get<string>(HttpRouting.backEndBase + "/me/pairs")
  }


  getMyDetails(){
    return this.http.get(HttpRouting.backEndBase + "/me")
  }

  getPreviousMessages(userId : number){
    return this.http.get(HttpRouting.backEndBase + "/me/messages/" + userId )
  }

  getUserFromId(userId: number){
    return this.http.get(HttpRouting.backEndBase + "/users/" + userId)
  }

  getMe(): Observable<User> {
    return this.http.get<User>(HttpRouting.backEndBase + "/me");
  }


  getUserbyID(userID: number): Observable<User> {
    return this.http.get<User>(HttpRouting.backEndBase + "/users" + userID);
  }

  updateMyProfile(user: any): Observable<User> {
    return this.http.put<User>(HttpRouting.backEndBase + "/me", user);
  }

  findPairs(): Observable<User> {
    return this.http.get<User>(HttpRouting.backEndBase + "/pairs/find/");
  }

  voteYes(userId: number) {
    return this.http.post<boolean>(HttpRouting.backEndBase + "/users/" + userId + "?match=true", null);
  }

  voteNo(userId: number) {
    return this.http.post<boolean>(HttpRouting.backEndBase + "/users/" + userId + "?match=false", null);
  }


  getTest(){
    this.http.get(HttpRouting.backEndBase + "/").subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
