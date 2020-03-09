import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(
        private httpClient: HttpClient
    ) { }

    authentication(email: string, password: string) {

        const send: any = {};

        send.email = email;
        send.password = password;

        const body = JSON.stringify(send);

        // tslint:disable-next-line:max-line-length
        return this.httpClient.post<any>(`${environment.api}login`, body)

        .pipe(map((response: any) => {

            localStorage.setItem('token', response.token_type + ' '+ response.token);

            return true;

        }));
    }
}
