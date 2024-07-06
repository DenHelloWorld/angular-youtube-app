import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import  HeaderComponent  from './components/header/header.component';
import { PrimeNGConfig } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, CustomButtonComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

class AppComponent implements OnInit {
  title = 'youtube-client-app';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
export default AppComponent;
