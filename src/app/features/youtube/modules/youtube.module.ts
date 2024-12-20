import { NgModule } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { StatisticsComponent } from 'app/features/youtube/components/statistics/statistics.component';
import { YoutubeRoutingModule } from 'app/features/youtube/modules/youtube-routing.module';
import { MainComponent } from 'app/features/youtube/pages/main/main.component';
import { DetailsService } from 'app/features/youtube/services/details.service';
import { DetailsComponent } from 'app/features/youtube/components/details/details.component';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { SearchItemComponent } from 'app/features/youtube/components/search-item/search-item.component';
import { ColoredBorderDirective } from 'app/shared/directives/colored-border.directive';
import { CardComponent } from 'app/shared/components/card/card.component';
import { SearchResultsComponent } from 'app/features/youtube/components/search-results/search-results.component';
import { CustomCardComponent } from 'app/features/youtube/components/custom-card/custom-card.component';
import { FilterCustomCardByTitlePipe } from 'app/features/youtube/pipes/customCardPipes/filterCustomCardByTitle.pipe';
import { SortCustomCardByDatePipe } from 'app/features/youtube/pipes/customCardPipes/sortCustomCardByDate.pipe';
import { FlattenPipe } from 'app/shared/pipes/flatten.pipe';
import { FavoritePageComponent } from 'app/features/youtube/pages/favorite-page/favorite-page.component';
import { FavoriteItemsComponent } from 'app/features/youtube/components/favorite-items/favorite-items.component';
import { MapKeyValueToArrayPipe } from 'app/shared/pipes/mapKeyValueToArray.pipe';
import { FavoriteItemsService } from 'app/features/youtube/services/favorite-items.service';
import { FilterComponent } from '../components/filter/filter.component';
import { FilterSortYouTubePipe } from '../pipes/youtubeCardPipes/FilterSortYouTube.pipe';

@NgModule({
  declarations: [
    SearchResultsComponent,
    MainComponent,
    FavoritePageComponent,
    FavoriteItemsComponent,
  ],
  imports: [
    FilterComponent,
    SortCustomCardByDatePipe,
    FilterCustomCardByTitlePipe,
    CustomCardComponent,
    SearchItemComponent,
    ColoredBorderDirective,
    FilterSortYouTubePipe,
    MapKeyValueToArrayPipe,
    CustomButtonComponent,
    CardComponent,
    FlattenPipe,
    YoutubeRoutingModule,
    StatisticsComponent,
    DetailsComponent,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.ScrollPanelModule,
    PRIME_NG_MODULES.CardModule,
    PRIME_NG_MODULES.ToolbarModule,
  ],
  providers: [DetailsService, FavoriteItemsService],
  exports: [MainComponent, FavoritePageComponent],
})
export class YoutubeModule {}
