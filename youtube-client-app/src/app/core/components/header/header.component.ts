import { Component } from '@angular/core';
import { SearchStringService } from 'app/core/services/search-string.service';

import { FiltService } from 'app/features/youtube/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export default class HeaderComponent {
  constructor(
    public filtService: FiltService,
    public searchStringService: SearchStringService,
  ) {}
}
