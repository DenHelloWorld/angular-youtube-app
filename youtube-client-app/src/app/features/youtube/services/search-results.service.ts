import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import {
  Item,
  YouTubeVideoListResponse,
} from '../models/youtube-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  showSearchResults: boolean = true;

  private mockItems: Item[] = [];

  searchedItems: Item[] = [];

  clientItems: Item[] = [];

  constructor(private youtubeService: YoutubeService) {
    this.youtubeService
      .getAll()
      .subscribe((response: YouTubeVideoListResponse) => {
        this.mockItems = response.items;
        this.clientItems = response.items;
      });
  }

  // toggleView() {
  //   this.showSearchResults = !this.showSearchResults;
  // }

  // setView(isShow: boolean) {
  //   console.log(isShow);
  //   this.showSearchResults = isShow;
  // }

  get allItems() {
    return this.mockItems;
  }

  get pageItems(): Item[] {
    return this.clientItems;
  }

  search(title: string) {
    this.searchedItems = this.youtubeService.getMatching(title);
  }
}
