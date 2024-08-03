import { BASE_YT_API_URL } from './../../features/youtube/constants/base-yt-api-url';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { API_KEYS } from 'app/features/youtube/constants/api-key';
import { catchError } from 'rxjs/operators';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  private readonly baseUrl: string = BASE_YT_API_URL;

  private readonly apiKeys: string[] = API_KEYS;

  private currentQueue: number = 0;

  private getApiKey(): string {
    return this.apiKeys[this.currentQueue];
  }

  private switchApiKey(): void {
    this.currentQueue = (this.currentQueue + 1) % this.apiKeys.length;
  }

  private isRetryableError(status: number): boolean {
    return status === 403 || status === 429 || status === 400;
  }

  private handleRequest(
    req: HttpRequest<unknown>,
    next: HttpHandler,
    retryCount: number = 0,
  ): Observable<HttpEvent<unknown>> {
    const apiReq = req.clone({
      url: `${this.baseUrl}${req.url}`,
      setParams: {
        key: this.getApiKey(),
      },
    });

    return next.handle(apiReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          this.isRetryableError(error.status) &&
          retryCount < this.apiKeys.length
        ) {
          this.switchApiKey();
          return this.handleRequest(req, next, retryCount + 1);
        }
        return throwError(() => new Error('All API keys exhausted'));
      }),
    );
  }

  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return this.handleRequest(req, next);
  }
}



