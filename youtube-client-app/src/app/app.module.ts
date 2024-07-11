import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './shared/components/custom-button/custom-button.component';
import SearchItemComponent from './faetures/youtube/pages/main/search-item/search-item.component';
import SearchResultsComponent from './faetures/youtube/pages/main/search-results/search-results.component';
import { CoreModule } from './core/modules/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SearchItemComponent,
    SearchResultsComponent,
    FormsModule,
    RouterOutlet,
    BrowserModule,
    CommonModule,
    CustomButtonComponent,
  ],
  bootstrap: [AppComponent],
  exports: [
    CoreModule,
    SearchItemComponent,
    SearchResultsComponent,
    FormsModule,
    RouterOutlet,
    BrowserModule,
    CommonModule,
    CustomButtonComponent,
  ],
})
export class AppModule {}
