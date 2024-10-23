import { Injectable, signal } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BUILDED_URLS } from 'app/features/youtube/models/builded-urls.model';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { YouTubeDetailsResponse } from 'app/features/youtube/models/youtube-details-responce.interface';
import { YouTubeSearchResponse } from 'app/features/youtube/models/youtube-search-response.interface';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public static videoDetailsByIdSignal = signal<YouTubeVideoDetailsData[]>([]);

  public static videoDetailsByTitleSignal = signal<YouTubeVideoDetailsData[]>([]);

  public static errorSignal = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  public getById(id: string): void {
    const url = BUILDED_URLS.detailsByVideoId(id);
    this.http
      .get<YouTubeDetailsResponse>(url)
      .pipe(
        map((response: YouTubeDetailsResponse) => response.items),
        catchError(error => {
          YoutubeService.errorSignal.set(error.message);
          return of([]);
        }),
      )
      .subscribe(items => YoutubeService.videoDetailsByIdSignal.set(items));
  }

  public getByTitle(title: string): void {
    const url = BUILDED_URLS.videosByTitle(title);
    this.http
      .get<YouTubeSearchResponse>(url)
      .pipe(
        map(response => response.items.map(item => item.id.videoId)),
        switchMap((videoIds: string[]) =>
          forkJoin(
            videoIds.map(id =>
              this.http
                .get<YouTubeDetailsResponse>(BUILDED_URLS.detailsByVideoId(id))
                .pipe(map(response => response.items)),
            ),
          ),
        ),
        map((videos: YouTubeVideoDetailsData[][]) => videos.flat()),
        catchError(error => {
          YoutubeService.errorSignal.set(error.message);
          return of([]);
        }),
      )
      .subscribe(videos => YoutubeService.videoDetailsByTitleSignal.set(videos));
  }
}
