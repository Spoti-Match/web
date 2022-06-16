//Michał Wilewski
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "../app/user-service/user.service";
import {tokenGetter} from "../app/app.module";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      })
      if (tokenGetter()) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${tokenGetter()}`
          }
        })
      }
    }
    return next.handle(request);
  }
}
