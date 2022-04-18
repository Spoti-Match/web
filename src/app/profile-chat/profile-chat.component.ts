import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from '../models/authentication-request/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response/authentication-response';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-profile-chat',
  templateUrl: './profile-chat.component.html',
  styleUrls: ['./profile-chat.component.scss']
})
export class ProfileChatComponent implements OnInit {

  jwToken: String = "abab";
  constructor(private userService: UserService) { }

  ngOnInit(): void {


  }

  test(){
    this.userService.getToken(new AuthenticationRequest("test@gmail.com","password"));
  }

  test2(){
    console.log(sessionStorage.getItem("authToken"))
  }

  test3(){
    this.userService.getTest();
  }
}
