import { PRIME_NG_MODULES } from './../../modules/prime-ng-modules';
import { Component, Input } from '@angular/core';
import { CustomValidationInfoConfig } from 'app/shared/models/custom-validation-info-config.interface';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';

@Component({
  selector: 'app-custom-validation-info',
  templateUrl: './custom-validation-info.component.html',
  standalone: true,
  imports: [ANGULAG_MODULES.CommonModule, PRIME_NG_MODULES.InputTextModule],
})
export class CustomValidationInfoComponent {
  @Input() config!: CustomValidationInfoConfig;

  get customErrorKeys(): string[] {
    return this.config.customErrorMessages
      ? Object.keys(this.config.customErrorMessages)
      : [];
  }
}
