import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedin!: boolean;
  isAdmin!: boolean;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.isLoggedin = false;
    this.isAdmin = false;
  }

  logout(){
    this.isLoggedin = false;
    this.router.navigateByUrl('login');

  }

}
