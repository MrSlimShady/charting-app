import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  User : User = {
    username: '',
    password: '',
    email: '',
    isAdmin: false
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
