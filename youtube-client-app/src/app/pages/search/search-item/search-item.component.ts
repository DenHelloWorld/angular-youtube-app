import { Component } from '@angular/core';
import CardComponent from 'app/components/card/card.component';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export default class SearchItemComponent {}
