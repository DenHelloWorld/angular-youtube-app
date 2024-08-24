import { Component, Input, OnInit } from '@angular/core';
import { CustomCard } from 'app/features/youtube/models/custom-card.interface';
import { CardComponent } from 'app/shared/components/card/card.component';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { ColoredBorderDirective } from 'app/shared/directives/colored-border.directive';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { FlattenPipe } from 'app/shared/pipes/flatten.pipe';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  imports: [
    FlattenPipe,
    ColoredBorderDirective,
    CardComponent,
    CustomButtonComponent,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.PanelModule,
    PRIME_NG_MODULES.DialogModule,
    PRIME_NG_MODULES.TagModule,
    PRIME_NG_MODULES.ToolbarModule,
  ],
  standalone: true,
})
export class CustomCardComponent implements OnInit {
  @Input() public customItemData?: CustomCard;

  public id: string = '';

  public linkImg: string = '';

  public creationDate: string = '';

  public visibleDescription: boolean = false;

  public ngOnInit(): void {
    this.setimageUrl();
    this.setId();
    this.setcreationDate();
  }

  private setimageUrl(): void {
    this.linkImg = this.customItemData?.linkImg ?? '';
  }

  private setcreationDate(): void {
    this.creationDate = this.customItemData?.creationDate ?? '';
  }

  public showDescription() {
    this.visibleDescription = true;
  }

  private setId() {
    this.id = uuidv4();
  }
}
