import { Component, OnInit } from '@angular/core';
import {VERSION} from "@angular/forms";

@Component({
  selector: 'app-profile-chat',
  templateUrl: './profile-chat.component.html',
  styleUrls: ['./profile-chat.component.scss']
})
export class ProfileChatComponent implements OnInit {

name='Angular ' + VERSION.major;

  constructor() { }

  ngOnInit(): void {
  }

}
