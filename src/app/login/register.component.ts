import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

    constructor(
        private usersService: UsersService
    ) {

    }

    ngOnInit(): void {
    }

    register() {
        this.usersService.register().subscribe((response: any) => {
            return response;
        });
    }

}
