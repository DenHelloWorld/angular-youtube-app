import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, CustomButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export default class CardComponent {
  @Input() imageUrl: string | undefined;

  @Input() imageAlt: string | undefined;

  @Input() headerText: string | undefined;

  @Input() subHeaderText: string | undefined;
}
