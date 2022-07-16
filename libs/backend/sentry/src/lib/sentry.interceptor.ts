import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import * as Sentry from '@sentry/node';

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  public intercept(
    _context: ExecutionContext,
    next: CallHandler
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<any> {
    return next.handle().pipe(
      tap({
        error: (exception) => {
          Sentry.captureException(exception);
        },
      })
    );
  }
}
