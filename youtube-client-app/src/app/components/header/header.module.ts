import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  HeaderComponent from './header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import FilterComponent from '../filter/filter.component';
import { FilterService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsService } from 'app/pages/search/search-results/service/search-results.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ToolbarModule,
    CustomButtonComponent, SplitButtonModule, InputTextModule, DropdownModule, AvatarModule, FilterComponent, FormsModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [FilterService, SearchResultsService],
})
export default class HeaderModule { }
