import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service/user.service";
import {User} from "../models/User/user";
import {FormControl, FormGroup} from "@angular/forms";
import {stringify} from "@angular/compiler/src/util";


@Component({
  selector: 'app-profile-browsing',
  templateUrl: './profile-browsing.component.html',
  styleUrls: ['./profile-browsing.component.scss']
})
export class ProfileBrowsingComponent implements OnInit {
  pairProfile: FormGroup;

  public myProfile: User;
  public currPair: User;
  public nextPair: User;
  public match: boolean;
  public picture: string = "";
  public bio: string = "";
  public age: number;
  public name: string = "";



  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMe().subscribe(user => {
      this.myProfile = user;
      console.log(JSON.stringify(user));
    });

    this.userService.findPairs().subscribe(pairUser => {
      this.currPair = pairUser;
      this.displayProf();
      console.log(JSON.stringify(pairUser));
    });
  }

  voteYesFunc() {
    this.userService.voteYes(this.currPair.id).subscribe(match => {
      this.match = match;
      console.log(JSON.stringify(match));
    });
    this.userService.findPairs().subscribe(currPair => {
      this.currPair = currPair;
      this.displayProf();
      console.log(JSON.stringify(currPair));
    });


  }

  voteNoFunc() {
    this.userService.voteNo(this.currPair.id).subscribe(match => {
      this.match = match;
      console.log(JSON.stringify(match));
    });
    this.userService.findPairs().subscribe(currPair => {
      this.currPair = currPair;
      this.displayProf();
      console.log(JSON.stringify(currPair));
    });
  }


  displayProf(): void {
    this.pairProfile = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      sex: new FormControl(null),
      bio: new FormControl(null),
      picture: new FormControl(null),
      preference_sex: new FormControl(null),
    });
    console.log(this.currPair);
    this.userService.getUserbyID(this.currPair.id).subscribe(user => {
      this.pairProfile.get('name')!.setValue(user.name);
      this.pairProfile.get('age')!.setValue(user.age);
      this.pairProfile.get('sex')!.setValue(user.sex);
      this.pairProfile.get('bio')!.setValue(user.bio);
      this.pairProfile.get('picture')!.setValue(user.picture);
      // this.pairProfile.get('preference_sex')!.setValue(stringify(user.preferences.sex));
      this.picture = user.picture;
      this.bio = user.bio;
      this.age = user.age;
      this.name = user.name;
    });
  }

}


