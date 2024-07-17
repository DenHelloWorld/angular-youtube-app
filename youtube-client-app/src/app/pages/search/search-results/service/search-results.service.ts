import { Injectable } from '@angular/core';
import { YouTubeResponse } from 'app/interfaces/youtube-response.interface';
import { YouTubeVideoData } from 'app/interfaces/youtube-video-data.interface';
import { YoutubeService } from 'app/services/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  public showSearchResults: boolean = false;

  private mockItems: YouTubeVideoData[] = [];

  public searchedItems: YouTubeVideoData[] = [];

  private clientItems: YouTubeVideoData[] = [];

  constructor(private youtubeService: YoutubeService) {
    this.youtubeService.getAll().subscribe((response: YouTubeResponse) => {
      this.mockItems = response.items;
      this.clientItems = response.items;
    });
  }

  public toggleView() {
    this.showSearchResults = !this.showSearchResults;
  }

  public setView(isShow: boolean) {
    this.showSearchResults = isShow;
  }

  public get allItems() {
    return this.mockItems;
  }

  public get pageItems(): YouTubeVideoData[] {
    return this.clientItems;
  }

  public search(title: string) {
    this.searchedItems = this.youtubeService.getMatching(title);
  }
}
