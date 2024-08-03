import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { DetailsService } from '../../services/details.service';
import { StatisticsComponent } from 'app/features/youtube/components/statistics/statistics.component';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { ColoredBorderDirective } from 'app/shared/directives/colored-border.directive';

@Component({
  selector: 'app-detalis',
  templateUrl: './details.component.html',
  standalone: true,
  imports: [
    CustomButtonComponent,
    ColoredBorderDirective,
    StatisticsComponent,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.ToolbarModule,
    PRIME_NG_MODULES.FieldsetModule,
    PRIME_NG_MODULES.DividerModule,
    PRIME_NG_MODULES.ScrollPanelModule,
  ],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private id: string = '';

  constructor(
    public detailsService: DetailsService,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.turnOnSubscribes();
  }

  public ngOnDestroy(): void {
    this.detailsService.turnOffSubscribes();
  }

  public turnOnSubscribes() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.id = id;
    });
    this.detailsService.loadDetailsById(this.id);
  }

  public handleButtonBack() {
    this.detailsService.handleButtonBack();
  }
}
