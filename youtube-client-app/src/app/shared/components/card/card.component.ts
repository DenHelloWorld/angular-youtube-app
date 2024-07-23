import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardConfig } from 'app/features/youtube/models/card-config.interface';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ScrollPanelModule, CardModule, CustomButtonComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export default class CardComponent {
  @Input() public config?: CardConfig;
}
