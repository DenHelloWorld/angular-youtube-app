import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BUILDED_URLS } from 'app/features/youtube/models/builded-urls.model';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { YouTubeDetailsResponse } from 'app/features/youtube/models/youtube-details-responce.interface';
import { YouTubeSearchResponse } from 'app/features/youtube/models/youtube-search-response.interface';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    private http: HttpClient,

  ) {}

  public getById(id: string): Observable<YouTubeVideoDetailsData[]> {
    const url = BUILDED_URLS.detailsByVideoId(id);
    return this.http
      .get<YouTubeDetailsResponse>(url)
      .pipe(map((response: YouTubeDetailsResponse) => response.items));
  }

  public getByTitle(title: string): Observable<YouTubeVideoDetailsData[]> {
    const url = BUILDED_URLS.videosByTitle(title);
    return this.http.get<YouTubeSearchResponse>(url).pipe(
      map((response) => response.items.map((item) => item.id.videoId)),
      switchMap((videoIds: string[]) =>
        forkJoin(videoIds.map((id) => this.getById(id))),
      ),
      map((videos: YouTubeVideoDetailsData[][]) => videos.flat()),
    );
  }
}
