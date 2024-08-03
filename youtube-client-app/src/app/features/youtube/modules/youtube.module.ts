import { NgModule } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { StatisticsComponent } from 'app/features/youtube/components/statistics/statistics.component';
import { YoutubeRoutingModule } from 'app/features/youtube/modules/youtube-routing.module';
import { MainComponent } from 'app/features/youtube/pages/main/main.component';
import { FilterByDatePipe } from 'app/features/youtube/pipes/filterByDate.pipe';
import { FilterByTitlePipe } from 'app/features/youtube/pipes/filterByTitle.pipe';
import { FilterByViewsPipe } from 'app/features/youtube/pipes/filterByViews.pipe';
import { DetailsService } from 'app/features/youtube/services/details.service';
import { DetailsComponent } from 'app/features/youtube/components/details/details.component';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { SearchItemComponent } from 'app/features/youtube/components/search-item/search-item.component';
import { ColoredBorderDirective } from 'app/shared/directives/colored-border.directive';
import { CardComponent } from 'app/shared/components/card/card.component';
import { SearchResultsComponent } from 'app/features/youtube/components/search-results/search-results.component';

@NgModule({
  declarations: [SearchResultsComponent, MainComponent],
  imports: [
    SearchItemComponent,
    ColoredBorderDirective,
    FilterByViewsPipe,
    FilterByDatePipe,
    FilterByTitlePipe,
    CustomButtonComponent,
    CardComponent,
    YoutubeRoutingModule,
    StatisticsComponent,
    DetailsComponent,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.ScrollPanelModule,
    PRIME_NG_MODULES.CardModule,
    PRIME_NG_MODULES.ToolbarModule,
  ],
  providers: [DetailsService],
  exports: [MainComponent],
})
export class YoutubeModule {}
