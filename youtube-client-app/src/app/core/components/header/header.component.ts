import { Component } from '@angular/core';
import { SearchStringService } from 'app/core/services/search-string.service';

import { FilterService } from 'app/features/youtube/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export default class HeaderComponent {
  constructor(
    public filterService: FilterService,
    public searchStringService: SearchStringService,
  ) {}
}
