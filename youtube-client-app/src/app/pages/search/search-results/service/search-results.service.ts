import { Injectable } from '@angular/core';
import { YouTubeResponse } from 'app/interfaces/youtube-response.interface';
import { YouTubeVideoData } from 'app/interfaces/youtube-video-data.interface';
import { YoutubeService } from 'app/services/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  showSearchResults: boolean = false;

  private mockItems: YouTubeVideoData[] = [];

  searchedItems: YouTubeVideoData[] = [];

  clientItems: YouTubeVideoData[] = [];

  constructor(private youtubeService: YoutubeService) {
    this.youtubeService.getAll().subscribe((response: YouTubeResponse) => {
      this.mockItems = response.items;
      this.clientItems = response.items;
    });
  }

  toggleView() {
    this.showSearchResults = !this.showSearchResults;
  }

  setView(isShow: boolean) {
    this.showSearchResults = isShow;
  }

  get allItems() {
    return this.mockItems;
  }

  get pageItems(): YouTubeVideoData[] {
    return this.clientItems;
  }

  search(title: string) {
    this.searchedItems = this.youtubeService.getMatching(title);
  }
}
