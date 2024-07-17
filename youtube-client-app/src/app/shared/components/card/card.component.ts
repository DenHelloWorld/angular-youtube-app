import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardConfig } from 'app/features/youtube/models/card-config.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ScrollPanelModule, CardModule, CustomButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export default class CardComponent {
  @Input() public config?: CardConfig;
}
