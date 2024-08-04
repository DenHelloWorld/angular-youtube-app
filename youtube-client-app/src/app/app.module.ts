import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from 'app/app-routing.module';
import { CoreModule } from 'app/core/modules/core.module';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { AppComponent } from 'app/app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './redux';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    ANGULAG_MODULES.FormsModule,
    RouterOutlet,
    ANGULAG_MODULES.BrowserModule,
    ANGULAG_MODULES.CommonModule,
    CustomButtonComponent,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
