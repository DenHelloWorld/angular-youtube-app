import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import HeaderComponent from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { FilterService } from 'primeng/api';
import FilterComponent from 'app/features/youtube/components/filter/filter.component';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';
import { HeaderService } from '../services/header.service';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { FieldsetModule } from 'primeng/fieldset';

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
    FieldsetModule,
  ],
  declarations: [HeaderComponent, NotFoundComponent],
  exports: [HeaderComponent, NotFoundComponent],
  providers: [FilterService, SearchResultsService, HeaderService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
