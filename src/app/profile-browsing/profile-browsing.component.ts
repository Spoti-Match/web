import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service/user.service";
import {User} from "../models/User/user";

@Component({
  selector: 'app-profile-browsing',
  templateUrl: './profile-browsing.component.html',
  styleUrls: ['./profile-browsing.component.scss']
})
export class ProfileBrowsingComponent implements OnInit {

  public currProfile: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMe().subscribe(user => {
      this.currProfile = user;
      console.log(JSON.stringify(user));
    });

   this.userService.getWhatever().subscribe(user => {
     this.currProfile = user;
     console.log(JSON.stringify(user));
   });

  }

}
