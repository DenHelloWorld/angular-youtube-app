import { Component, inject } from '@angular/core';
import { FavoriteItemsService } from 'app/features/youtube/services/favorite-items.service';

import { SearchService } from 'app/features/youtube/services/search.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
})
export class FavoriteItemsComponent {
  public searchService = inject(SearchService);

  public favoriteItemsService = inject(FavoriteItemsService);
}
