import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';// Импортируйте ваш компонент
import AppComponent from './app.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import SearchResultsComponent from './pages/search/search-results/search-results.component';
import SearchItemComponent from './pages/search/search-item/search-item.component';
import HeaderModule from './components/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SearchItemComponent, SearchResultsComponent, FormsModule, HeaderModule, RouterOutlet, BrowserModule, CommonModule, CustomButtonComponent],
  bootstrap: [AppComponent],
  exports: [SearchItemComponent, SearchResultsComponent, FormsModule, HeaderModule, RouterOutlet, BrowserModule, CommonModule, CustomButtonComponent],
})

export class AppModule {}
