import { FilterService } from './../../../features/youtube/services/filter.service';
import { Component, OnInit } from '@angular/core';
import { SearchStringService } from 'app/core/services/search-string.service';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';


@Component({
  selector: 'app-search-string',
  templateUrl: './search-string.component.html',
  standalone: true,
  imports: [
    CustomButtonComponent,
    ANGULAG_MODULES.CommonModule,
    ANGULAG_MODULES.FormsModule,
    PRIME_NG_MODULES.MessagesModule,
    PRIME_NG_MODULES.InputTextModule,
  ],
})
export class SearchStringComponent implements OnInit {
  constructor(
    public searchStringService: SearchStringService,
    public filterService: FilterService,
  ) {}

  public ngOnInit(): void {
    this.searchStringService.turnOnSubscriptions();
  }

  public ngOnDestroy(): void {
    this.searchStringService.turnOffSubscriptions();
  }
}
