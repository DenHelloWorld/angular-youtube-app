import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, Output, EventEmitter } from '@angular/core';
import { CustomButtonConfig } from 'app/interfaces/custom-button-config.interface';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomButtonComponent {
  @Input() public config?: CustomButtonConfig;

  @Output() private customEvent = new EventEmitter<void>();

  public handleCustomEvent() {
    this.customEvent.emit();
  }
}
