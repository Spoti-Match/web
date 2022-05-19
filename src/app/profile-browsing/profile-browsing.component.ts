import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-browsing',
  templateUrl: './profile-browsing.component.html',
  styleUrls: ['./profile-browsing.component.scss']
})
export class ProfileBrowsingComponent implements OnInit {
  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

}
