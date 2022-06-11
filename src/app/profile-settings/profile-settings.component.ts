import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  myProfile: FormGroup;

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  constructor(private dateAdapter: DateAdapter<Date>, private userService: UserService) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy

  }

  ngOnInit(): void {
    this.myProfile = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      sex: new FormControl(null),
      bio: new FormControl(null),
      picture: new FormControl(null)
    });
    this.userService.getMe().subscribe(user => {
      this.myProfile.get('name')!.setValue(user.name);
      this.myProfile.get('age')!.setValue(user.age);
      this.myProfile.get('sex')!.setValue(user.sex);
      this.myProfile.get('bio')!.setValue(user.bio);
      this.myProfile.get('picture')!.setValue(user.picture);
    });
  }

  public showMyMessage = false

  showMessageSoon() {
    setTimeout(() => {
      this.showMyMessage = true
    }, 30)
    setTimeout( () => {
      this.showMyMessage = false;
    }, 2000);
    const body = {
      name: this.myProfile.get('name')!.value,
      age: this.myProfile.get('age')!.value,
      sex: this.myProfile.get('sex')!.value,
      bio: this.myProfile.get('bio')!.value,
      picture: this.myProfile.get('picture')!.value,
    }
    this.userService.updateMyProfile(body).subscribe();
  }

}



