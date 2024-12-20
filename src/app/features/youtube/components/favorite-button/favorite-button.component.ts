import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addYouTubeCardToFavorites, removeYouTubeCardFromFavorites } from 'app/redux/actions/youtube-card.actions';
import { selectIsFavoriteObservable } from 'app/redux/selectors/favorite-cards.selectors';
import { AppState } from 'app/redux/states/app.state';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { Subject, takeUntil } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  standalone: true,
  imports: [CustomButtonComponent],
})
export class FavoriteButtonComponent extends CustomButtonComponent implements OnInit, OnDestroy {
  @Input() public id?: string;

  public isFavoriteStatus: boolean = false;

  public isFavorite$: Observable<boolean> = new Observable();

  private state$: Observable<AppState>;

  private destroy$ = new Subject<void>();

  constructor(private store: Store) {
    super();
    this.state$ = store as Observable<AppState>;
  }

  ngOnInit(): void {
    if (this.id) {
      this.isFavorite$ = selectIsFavoriteObservable(this.id, this.state$);
      this.isFavorite$.pipe(takeUntil(this.destroy$)).subscribe(isFavorite => {
        this.isFavoriteStatus = isFavorite;
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public favoriteIcon(): string {
    return this.isFavoriteStatus ? 'pi-heart-fill' : 'pi-heart';
  }

  public addToFavorite(): void {
    if (this.id) this.store.dispatch(addYouTubeCardToFavorites({ cardId: this.id }));
  }

  public removeFromFavorite(): void {
    if (this.id) this.store.dispatch(removeYouTubeCardFromFavorites({ cardId: this.id }));
  }

  public favoriteProcess(): void {
    if (this.isFavoriteStatus) {
      this.removeFromFavorite();
    } else {
      this.addToFavorite();
    }
  }
}
