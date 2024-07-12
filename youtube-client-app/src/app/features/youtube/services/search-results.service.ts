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
