import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import FilterComponent from 'app/features/youtube/components/filter/filter.component';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';
import { FieldsetModule } from 'primeng/fieldset';
import HeaderComponent from 'app/core/components/header/header.component';
import { NotFoundComponent } from 'app/core/components/not-found/not-found.component';
import { SearchStringService } from 'app/core/services/search-string.service';

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
  providers: [SearchResultsService, SearchStringService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
