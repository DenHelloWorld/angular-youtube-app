import { Component, Input, OnInit } from '@angular/core';
import { CustomCard } from 'app/features/youtube/models/custom-card.interface';
import { CardComponent } from 'app/shared/components/card/card.component';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { ColoredBorderDirective } from 'app/shared/directives/colored-border.directive';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  imports: [
    ColoredBorderDirective,
    CardComponent,
    CustomButtonComponent,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.ToolbarModule,
  ],
  standalone: true,
})
export class CustomCardComponent implements OnInit {
  @Input() public customItemData?: CustomCard;

  public id: string = '';

  public title: string = '';

  public description: string = '';

  public linkImg: string = '';

  public videoUrl: string = '';

  public creationDate: string = '';

  public ngOnInit(): void {
    this.setimageUrl();
  }

  private setimageUrl(): void {
    this.linkImg = this.customItemData?.linkImg ?? '';
  }

  // private setCustomItemData(): void {
  //   const { id, title, description, imageUrl, videoUrl, creationDate } =
  //     this.customItemData;
  //   this.id = id;
  //   this.title = title;
  //   this.description = description;
  //   this.imageUrl = imageUrl;
  //   this.videoUrl = videoUrl;
  //   this.creationDate = creationDate;
  // }
}
