import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, Output, EventEmitter } from '@angular/core';
import { CustomButtonConfig } from 'app/features/youtube/models/custom-button-config.interface';
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

  @Output() private event = new EventEmitter<void>();

  public handleEvent() {
    this.event.emit();
  }
}
