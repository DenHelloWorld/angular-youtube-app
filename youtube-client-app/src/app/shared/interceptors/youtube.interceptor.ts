import { BASE_YT_API_URL } from './../../features/youtube/constants/base-yt-api-url';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from 'app/features/youtube/constants/api-key';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  private readonly baseUrl: string = BASE_YT_API_URL;

  private readonly apiKey: string = API_KEY;

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

    return next.handle(apiReq);
  }
}
