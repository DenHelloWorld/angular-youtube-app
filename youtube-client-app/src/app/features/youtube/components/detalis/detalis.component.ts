import { Component, OnInit } from '@angular/core';
import { DetalisService } from '../../services/detalis.service';
import { ActivatedRoute } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import ColoredBorderDirective from 'app/shared/directives/colored-border.directive';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.scss'],
  standalone: true,
  imports: [
    ToolbarModule,
    FieldsetModule,
    CustomButtonComponent,
    ColoredBorderDirective,
    StatisticsComponent,
    DividerModule,
    PanelModule,
  ],
})
export class DetalisComponent implements OnInit {
  id: string = '';

  constructor(
    public detalisService: DetalisService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.turnOnSubscribes();
  }

  turnOnSubscribes() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.id = id;
    });
    this.detalisService.loadDetalisById(this.id);
  }

  ngOnDestroy(): void {
    this.detalisService.turnOffSubscribes();
  }

  handleButtonBack() {
    this.detalisService.handleButtonBack();
  }
}
