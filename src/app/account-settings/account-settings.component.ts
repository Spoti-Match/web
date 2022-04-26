import { Component, OnInit } from '@angular/core';
import {Options} from "@angular-slider/ngx-slider";

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  formatLabel: any;

  genders: Gender[] = [
    {value: 'g-0', viewValue: 'Male'},
    {value: 'g-1', viewValue: 'Female'},
    {value: 'g-2', viewValue: 'Both'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  value: number = 16;
  highValue: number = 100;
  options: Options = {
    floor: 16,
    ceil: 100
  };

}
