import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { FiltService } from './filter.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ToolbarModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  animations: [
    trigger('filterSlide', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export default class FilterComponent {
  constructor(public filtService: FiltService) {}

  get isVisible() {
    return this.filtService.showFilter;
  }
}
