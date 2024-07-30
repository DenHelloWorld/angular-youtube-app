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

  private currentKeyIndex: number = 0;

  private get apiKey(): string {
    return this.apiKeys[this.currentKeyIndex];
  }

  private switchApiKey(): void {
    this.currentKeyIndex = (this.currentKeyIndex + 1) % this.apiKeys.length;
  }

  private handleError(
    error: HttpErrorResponse,
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (error.status === 403 || error.status === 429) {
      this.switchApiKey();
      const newApiReq = req.clone({
        url: `${this.baseUrl}${req.url}`,
        setParams: {
          key: this.apiKey,
        },
      });
      return next.handle(newApiReq);
    }

    return throwError(() => error);
  }

  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const apiReq = req.clone({
      url: `${this.baseUrl}${req.url}`,
      setParams: {
        key: this.apiKey,
      },
    });

    return next
      .handle(apiReq)
      .pipe(catchError((error) => this.handleError(error, req, next)));
  }
}
