import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
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
    private loginService: LoginService
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

    this.loginService.authentication(email, password)
    .subscribe( success => this.router.navigate(['/dashboard']) );
}

}
