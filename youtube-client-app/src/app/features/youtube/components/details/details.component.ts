import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import ColoredBorderDirective from 'app/shared/directives/colored-border.directive';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DetailsService } from '../../services/details.service';
import { StatisticsComponent } from 'app/features/youtube/components/statistics/statistics.component';

@Component({
  selector: 'app-detalis',
  templateUrl: './details.component.html',
  standalone: true,
  imports: [
    ToolbarModule,
    FieldsetModule,
    CustomButtonComponent,
    ColoredBorderDirective,
    StatisticsComponent,
    DividerModule,
    CommonModule,
    ScrollPanelModule,
  ],
})
export class DetailsComponent implements OnInit {
  private id: string = '';

  constructor(
    public detailsService: DetailsService,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.turnOnSubscribes();
  }

  public turnOnSubscribes() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.id = id;
    });
    this.detailsService.loadDetailsById(this.id);
  }

  public ngOnDestroy(): void {
    this.detailsService.turnOffSubscribes();
  }

  public handleButtonBack() {
    this.detailsService.handleButtonBack();
  }
}
