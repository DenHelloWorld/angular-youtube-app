import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import  HeaderComponent  from './components/header/header.component';
import { PrimeNGConfig } from 'primeng/api';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import SearchItemComponent from './pages/search/search-item/search-item.component';
import { YoutubeServiceService } from './services/youtube-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchItemComponent, RouterOutlet, CommonModule, CustomButtonComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [YoutubeServiceService],
})

class AppComponent implements OnInit {
  title = 'youtube-client-app';

  constructor(private primengConfig: PrimeNGConfig, public youtubeService: YoutubeServiceService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
export default AppComponent;
