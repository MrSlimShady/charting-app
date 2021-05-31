import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedin: boolean | undefined;
  isAdmin: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.isLoggedin = true;
    this.isAdmin = false;
  }


}
