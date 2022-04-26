import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  hobbiesControl = new FormControl([]);
  hobbyList: string[] = ['Reading', 'Stargazing', 'Hiking', 'Cooking', 'Board games', 'Video games', 'Cars', 'Traveling'];

  onHobbyRemoved(hobby: string) {
    const hobbies = this.hobbiesControl.value as string[];
    this.removeFirst(hobbies, hobby);
    this.hobbiesControl.setValue(hobbies); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy

  }

  ngOnInit(): void {
  }

  public showMyMessage = false

  showMessageSoon() {
    setTimeout(() => {
      this.showMyMessage = true
    }, 30)
    setTimeout( () => {
      this.showMyMessage = false;
    }, 2000);
  }

}



