import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from 'app/app-routing.module';
import { CoreModule } from 'app/core/modules/core.module';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { AppComponent } from 'app/app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from 'app/redux';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from 'app/redux/reducers/index.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomCardEffects } from 'app/redux/effects/custom-card.effects';

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
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CustomCardEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
