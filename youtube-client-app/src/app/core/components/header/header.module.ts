import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from './header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { FilterService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsService } from 'app/youtube/services/search-results.service';
import FilterComponent from 'app/youtube/components/filter/filter.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ToolbarModule,
    CustomButtonComponent,
    SplitButtonModule,
    InputTextModule,
    DropdownModule,
    AvatarModule,
    FilterComponent,
    FormsModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [FilterService, SearchResultsService],
})
export default class HeaderModule {}
