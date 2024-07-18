import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import SearchItemComponent from '../components/search-item/search-item.component';
import { CommonModule } from '@angular/common';
import SearchResultsComponent from '../components/search-results/search-results.component';
import ColoredBorderDirective from 'app/shared/directives/colored-border.directive';
import { FilterByDatePipe } from '../pipes/filterByDate.pipe';
import { FilterByTitlePipe } from '../pipes/filterByTitle.pipe';
import { FilterByViewsPipe } from '../pipes/filterByViews.pipe';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import CardComponent from 'app/shared/components/card/card.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainComponent } from '../pages/main/main.component';
import { DetalisComponent } from '../components/detalis/detalis.component';
import { DetalisService } from '../services/detalis.service';
import { StatisticsComponent } from '../components/statistics/statistics.component';

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
    DetalisComponent,
  ],
  providers: [DetalisService],
  exports: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class YoutubeModule {}
