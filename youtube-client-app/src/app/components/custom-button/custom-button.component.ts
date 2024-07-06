import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() label: string | undefined;

  @Input() raised: boolean | undefined;

  @Input() severity: string | undefined;

  @Input() icon: string | undefined;

  @Input() rounded: boolean | undefined;

  @Output() customEvent = new EventEmitter<void>();

  handleCustomEvent() {
    this.customEvent.emit();
  }
}
