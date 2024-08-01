import { NgModule } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';
import { NotFoundComponent } from 'app/core/components/not-found/not-found.component';
import { SearchStringService } from 'app/core/services/search-string.service';
import { SearchStringComponent } from 'app/core/components/search-string/search-string.component';
import { AuthButtonComponent } from 'app/features/auth/components/auth-button/auth-button.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from 'app/shared/interceptors/youtube.interceptor';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { FilterComponent } from 'app/features/youtube/components/filter/filter.component';
import { HeaderComponent } from 'app/core/components/header/header.component';

@NgModule({
  imports: [
    FilterComponent,
    CustomButtonComponent,
    SearchStringComponent,
    AuthButtonComponent,
    ANGULAG_MODULES.BrowserAnimationsModule,
    ANGULAG_MODULES.FormsModule,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.ToolbarModule,
    PRIME_NG_MODULES.SplitButtonModule,
    PRIME_NG_MODULES.DropdownModule,
    PRIME_NG_MODULES.AvatarModule,
    PRIME_NG_MODULES.FieldsetModule,
  ],
  declarations: [HeaderComponent, NotFoundComponent],
  exports: [HeaderComponent, NotFoundComponent],
  providers: [
    SearchResultsService,
    SearchStringService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeInterceptor,
      multi: true,
    },
  ],

  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
