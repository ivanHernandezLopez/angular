import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  authentication(email: string, password: string) {

    const send: any = {};

    send.email = email;
    send.password = password;

    const body = JSON.stringify(send);

    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<any>(`${environment.api}login`, body)

    .pipe(map((response: any) => {

        /*if (response.body.isSuccess) {

            response.body.data.Authorization = response.headers.get('Authorization');

            localStorage.setItem('currentUser', JSON.stringify(response.body.data));

        }*/

        localStorage.setItem('token', response.token);

        return true;

    }));
  }

  register() {
    const send: any = {};

    send.name = 'Ivan Hernandez Lopez';
    send.email = 'van.m285@gmail.com';
    send.password = '123456';

    const body = JSON.stringify(send);

    return this.httpClient.post<any>(`${environment.api}create`, body).pipe(map(response => {

      return response.body;

    }));

  }

}
