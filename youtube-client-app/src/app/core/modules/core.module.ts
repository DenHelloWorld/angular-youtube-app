import { NgModule } from '@angular/core';
import HeaderComponent from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import FilterComponent from 'app/faetures/youtube/components/filter/filter.component';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchResultsService } from 'app/faetures/youtube/services/search-results.service';
import { FilterService } from 'primeng/api';



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
export class CoreModule {}
