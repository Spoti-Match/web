import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service/user.service";
import {User} from "../models/User/user";


@Component({
  selector: 'app-profile-browsing',
  templateUrl: './profile-browsing.component.html',
  styleUrls: ['./profile-browsing.component.scss']
})
export class ProfileBrowsingComponent implements OnInit {

  public myProfile: User;
  public currPair: User;
  public nextPair: User;
  public match: boolean;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMe().subscribe(user => {
      this.myProfile = user;
      console.log(JSON.stringify(user));
    });

    this.userService.findPairs().subscribe(pairUser => {
      this.currPair = pairUser;
      console.log(JSON.stringify(pairUser));
    });


  }

  voteYesFunc() {
    this.userService.voteYes(this.currPair.id).subscribe(match => {
      this.match = match;
      console.log(JSON.stringify(match));
    });
    this.userService.findPairs().subscribe(nextPair => {
      this.nextPair = nextPair;
      console.log(JSON.stringify(nextPair));
    });
  }

  voteNoFunc() {
    this.userService.voteNo(this.currPair.id).subscribe(match => {
      this.match = match;
      console.log(JSON.stringify(match));
    });
    this.userService.findPairs().subscribe(nextPair => {
      this.nextPair = nextPair;
      console.log(JSON.stringify(nextPair));
    });
  }

}


