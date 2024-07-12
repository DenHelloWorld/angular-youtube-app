import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import SearchItemComponent from '../pages/main/search-item/search-item.component';
import { CommonModule } from '@angular/common';
import SearchResultsComponent from '../pages/main/search-results/search-results.component';
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

@NgModule({
  declarations: [SearchResultsComponent],
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
  ],
  exports: [SearchResultsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class YoutubeModule {

}
