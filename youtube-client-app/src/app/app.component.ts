import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
class AppComponent {
  title = 'youtube-client-app';
}
export default AppComponent;
