import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

    account: FormGroup;

    constructor(
        private router: Router,
        private usersService: UsersService
    ) {

        this.account = new FormGroup({
            type: new FormControl('f'),
            name: new FormControl(''),
            curp: new FormControl(''),
            email: new FormControl(''),
            phone: new FormControl('')
        });

    }

    ngOnInit(): void {
    }

    register() {
        this.usersService.register(this.account.value).subscribe((response: any) => {
            return response;
        });
    }

}
