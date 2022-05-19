import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidecontainer',
  templateUrl: './sidecontainer.component.html',
  styleUrls: ['./sidecontainer.component.scss']
})
export class SidecontainerComponent implements OnInit {
  opened = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  profil() {
    this.router.navigateByUrl('/profile');
  }

}
