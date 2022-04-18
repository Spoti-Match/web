import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sidenav',
  templateUrl: './menu-sidenav.component.html',
  styleUrls: ['./menu-sidenav.component.scss']
})
export class MenuSidenavComponent implements OnInit {
  opened = false;
  onoff = true;


  constructor() { }

  ngOnInit(): void {
  }

}
