import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let requestCloned!: HttpRequest<unknown>;

    if (request.url.startsWith('/api')) {
      requestCloned = request.clone({
        url: `${environment.backendUrl}${request.url}`,
      });
    }

    return next.handle(requestCloned);
  }
}
