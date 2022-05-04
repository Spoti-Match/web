import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-sidecontainer',
  templateUrl: './sidecontainer.component.html',
  styleUrls: ['./sidecontainer.component.scss']
})
export class SidecontainerComponent implements OnInit {

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  profil() {
    this.router.navigateByUrl('/profile');
  }

  logoutButton(){
    this.userService.logOut();
    window.location.reload();
  }

}
