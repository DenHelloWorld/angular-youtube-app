import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from 'app/app-routing.module';
import AppComponent from 'app/app.component';
import { CoreModule } from 'app/core/modules/core.module';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    FormsModule,
    RouterOutlet,
    BrowserModule,
    CommonModule,
    CustomButtonComponent,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
