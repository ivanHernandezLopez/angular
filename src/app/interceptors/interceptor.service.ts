import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const headers = new HttpHeaders({ 'Content-Type': 'application/json',  Authorization: 'asdsadsadsadsad' })

        const reqClone = req.clone({
            headers
        });

        return next.handle(reqClone);
    }

    handler(error: HttpErrorResponse) {
        return throwError(error);
    }
}
