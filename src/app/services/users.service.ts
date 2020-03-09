import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  register(account: FormControl) {

    const body = JSON.stringify(account);

    return this.httpClient.post<any>(`${environment.api}create`, body).pipe(map(response => {

      return response.body;

    }));

  }

}
