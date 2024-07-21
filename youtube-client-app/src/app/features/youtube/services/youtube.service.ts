import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YouTubeResponse } from '../models/youtube-response.interface';
import { YouTubeVideoData } from '../models/youtube-video-data.interface';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from '../constants/api-key';
import { SEARCH_URL } from '../constants/search-url';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private apiKey = API_KEY;

  private searchUrl = SEARCH_URL;

  constructor(private http: HttpClient) {}

  // getAll(): Observable<YouTubeResponse> {
  //   const url = `${this.searchUrl}?key=${this.apiKey}&part=snippet&type=video&maxResults=10`;
  //   return this.http.get<YouTubeResponse>(url);
  // }

  getById(id: string): Observable<YouTubeVideoData[]> {
    const url = `${this.searchUrl}?key=${this.apiKey}&part=snippet&type=video&id=${id}`;
    return this.http
      .get<YouTubeResponse>(url)
      .pipe(map((response) => response.items));
  }

  getByTitle(title: string): Observable<YouTubeVideoData[]> {
    const url = `${this.searchUrl}?key=${this.apiKey}&part=snippet&type=video&q=${title}&maxResults=10`;
    return this.http.get<YouTubeResponse>(url).pipe(
      tap((response) => console.log('API Response:', response)),
      map((response) => response.items),
      tap((items) => console.log('Video Items:', items)),
    );
  }
}
