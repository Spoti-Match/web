import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import * as Keycloak from 'keycloak-js';
import { environment } from 'src/environments/environment';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from './user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public userService: UserService){

  }

  title = 'SpotiMatchFrontend';
}



