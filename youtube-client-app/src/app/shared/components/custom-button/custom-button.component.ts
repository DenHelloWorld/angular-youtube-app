import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CustomButtonConfig } from 'app/shared/models/custom-button-config.interface';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [PRIME_NG_MODULES.ButtonModule],
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent {
  @Input() public config?: CustomButtonConfig;

  @Output() private event = new EventEmitter<void>();

  public handleEvent() {
    this.event.emit();
  }
}
