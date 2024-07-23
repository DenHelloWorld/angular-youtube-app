import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import SearchItemComponent from '../components/search-item/search-item.component';
import { CommonModule } from '@angular/common';
import ColoredBorderDirective from 'app/shared/directives/colored-border.directive';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import CardComponent from 'app/shared/components/card/card.component';
import SearchResultsComponent from 'app/features/youtube/components/search-results/search-results.component';
import { StatisticsComponent } from 'app/features/youtube/components/statistics/statistics.component';
import { YoutubeRoutingModule } from 'app/features/youtube/modules/youtube-routing.module';
import { MainComponent } from 'app/features/youtube/pages/main/main.component';
import { FilterByDatePipe } from 'app/features/youtube/pipes/filterByDate.pipe';
import { FilterByTitlePipe } from 'app/features/youtube/pipes/filterByTitle.pipe';
import { FilterByViewsPipe } from 'app/features/youtube/pipes/filterByViews.pipe';
import { DetailsService } from 'app/features/youtube/services/details.service';
import { DetailsComponent } from 'app/features/youtube/components/details/details.component';

@NgModule({
  declarations: [SearchResultsComponent, MainComponent],
  imports: [
    SearchItemComponent,
    CommonModule,
    ColoredBorderDirective,
    FilterByViewsPipe,
    FilterByDatePipe,
    FilterByTitlePipe,
    ScrollPanelModule,
    CardModule,
    ToolbarModule,
    CustomButtonComponent,
    CardComponent,
    YoutubeRoutingModule,
    StatisticsComponent,
    DetailsComponent,
  ],
  providers: [DetailsService],
  exports: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class YoutubeModule {}
