import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as winston from 'winston';

const customColors = {
  error: 'red',
  warn: 'yellow',
  info: 'blue',
  debug: 'magenta',
};

winston.addColors(customColors);

const customLogger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message, ...metadata }) => {
      const metaString = Object.keys(metadata).length
        ? JSON.stringify(metadata, null, 2)
        : '';
      return `${level}: ${message} ${metaString} ${timestamp}`;
    }),
  ),
  transports: [new winston.transports.Console()],
});

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const body = request.body;

    customLogger.info(`💡 Incoming Request: ${method} ${url}`, {
      event: 'Request',
      method,
      url,
      body,
      timestamp: new Date().toISOString(),
    });

    console.log('-------------------------------------');

    return next.handle().pipe(
      tap((data) => {
        const responseTime = Date.now() - now;

        customLogger.info(
          `💡 Outgoing Response: ${url} took ${responseTime}ms`,
          {
            event: 'Response',
            method,
            url,
            body,
            data,
            responseTime: `${responseTime}ms`,
            timestamp: new Date().toISOString(),
          },
        );

        console.log('-------------------------------------');
      }),
      catchError((err) => {
        const responseTime = Date.now() - now;

        customLogger.error(`💢 Request Error: ${url} took ${responseTime}ms`, {
          event: 'Request Error',
          method,
          url,
          error: err.message,
          stack: err.stack,
          timestamp: new Date().toISOString(),
        });

        return throwError(() => err);
      }),
    );
  }
}
