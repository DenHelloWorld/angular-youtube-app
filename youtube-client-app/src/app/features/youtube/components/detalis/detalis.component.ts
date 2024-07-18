import { Component, OnInit } from '@angular/core';
import { DetalisService } from '../../services/detalis.service';
import { ActivatedRoute } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import ColoredBorderDirective from 'app/shared/directives/colored-border.directive';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';

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
    CommonModule,
    ScrollPanelModule,
  ],
})
export class DetalisComponent implements OnInit {
  private id: string = '';

  constructor(
    public detalisService: DetalisService,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.turnOnSubscribes();
  }

  private turnOnSubscribes() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.id = id;
    });
    this.detalisService.loadDetalisById(this.id);
  }

  public ngOnDestroy(): void {
    this.detalisService.turnOffSubscribes();
  }

  public handleButtonBack() {
    this.detalisService.handleButtonBack();
  }
}
