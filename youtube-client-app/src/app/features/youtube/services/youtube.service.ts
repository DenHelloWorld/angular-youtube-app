import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YouTubeResponse } from '../models/youtube-response.interface';
import { YouTubeVideoData } from '../models/youtube-video-data.interface';
import { HttpClient } from '@angular/common/http';
import { BUILDED_URLS } from '../models/builded-urls.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {

  constructor(private http: HttpClient) {}

  public getById(id: string): Observable<YouTubeVideoData[]> {
    const url = BUILDED_URLS.detailsByVideoId(id);
    // this.loadingService.show(); построить сервис
    return this.http.get<YouTubeResponse>(url).pipe(
      map((response: YouTubeResponse) => response.items),
      // finalize(() => this.loadingService.hide())
    );
  }

  public getByTitle(title: string): Observable<YouTubeVideoData[]> {
    const url = BUILDED_URLS.videosByTitle(title);
    return this.http.get<YouTubeResponse>(url).pipe(
      map((response) => response.items),
    );
  }
}
