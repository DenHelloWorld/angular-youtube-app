import { Component, Input } from '@angular/core';
import { CardConfig } from 'app/features/youtube/models/card-config.interface';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CustomButtonComponent,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.ScrollPanelModule,
    PRIME_NG_MODULES.CardModule,
  ],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() public config?: CardConfig;
}
