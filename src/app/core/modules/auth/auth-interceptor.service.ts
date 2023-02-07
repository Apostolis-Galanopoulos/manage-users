import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept <Type> (req: HttpRequest<Type>, next: HttpHandler): Observable<HttpEvent<Type>> {
    const token = environment.token;
    const request = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
    return next.handle(request);
  }
}
