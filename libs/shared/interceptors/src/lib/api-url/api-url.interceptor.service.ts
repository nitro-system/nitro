import { Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiUrlInterceptor implements HttpInterceptor {
  public constructor(public readonly backendUrl: string) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let requestCloned!: HttpRequest<unknown>;

    if (request.url.startsWith('/api')) {
      requestCloned = request.clone({
        url: `${this.backendUrl}${request.url}`,
      });
    }

    return next.handle(requestCloned);
  }
}

export const apiUrlInterceptorProvider = (
  backendUrl = 'http://localhost:3000'
): Provider => ({
  provide: HTTP_INTERCEPTORS,
  useClass: ApiUrlInterceptor.bind(this, backendUrl),
  multi: true,
});
