import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

    constructor(
        private router: Router
    ) {

    }

    canActivate(): boolean  {
        if (localStorage.getItem('tokens')) {
            return true;
        } else {
            this.router.navigate(['/ingresar']);
            return false;
        }
    }

}
