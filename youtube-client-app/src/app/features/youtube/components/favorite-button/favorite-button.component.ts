import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  standalone: true,
  imports: [CustomButtonComponent],
})
export class FavoriteButtonComponent
  extends CustomButtonComponent
  implements OnInit, OnDestroy {
  @Input() public id?: string;

  public isFavoriteStatus: boolean = false;

  ngOnInit() {}

  ngOnDestroy() {}

  public favoriteIcon(): string {
    return this.isFavoriteStatus ? 'pi-heart-fill' : 'pi-heart';
  }

  public favoriteProcess(): void {
    console.log('favoriteProcess', this.id);
  }
}
