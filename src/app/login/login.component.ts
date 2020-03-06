import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: FormGroup;


  constructor(
    private router: Router,
    private usersService: UsersService
  ) {
    this.login = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {

  }

  authentication() {

    const email = this.login.get('email').value;
    const password = this.login.get('password').value;

    this.usersService.authentication(email, password)
    .subscribe( success => this.router.navigate(['/dashboard']) );
}

}
