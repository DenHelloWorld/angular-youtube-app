import { Component } from '@angular/core';
import { FavoriteItemsService } from 'app/features/youtube/services/favorite-items.service';

import { SearchResultsService } from 'app/features/youtube/services/search-results.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
})
export class FavoriteItemsComponent {
  constructor(
    public searchResultsService: SearchResultsService,
    public favoriteItemsService: FavoriteItemsService,
  ) {}
}