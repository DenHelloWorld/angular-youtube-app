import { Component, effect, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { YoutubeService } from 'app/features/youtube/services/youtube.service';
import { loadFavoriteCardsSuccess } from 'app/redux/actions/favorite-card.actions';
import { loadYouTubeCardsFailure } from 'app/redux/actions/youtube-card.actions';
import { selectFavoriteListIdsArray } from 'app/redux/selectors/favorite-cards.selectors';
import { AppState } from 'app/redux/states/app.state';

import { distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
})
export class FavoriteItemsComponent implements OnInit, OnDestroy {
  public favoriteListIds: string[] = [];

  public favoriteVideos: YouTubeVideoDetailsData[] = [];

  private state$: Observable<AppState>;

  private destroy$ = new Subject<void>();

  constructor(private store: Store, private youtubeService: YoutubeService) {
    this.state$ = store as Observable<AppState>;
    this.initializeEffects();
  }

  public ngOnInit(): void {
    this.state$
      .pipe(
        map((state) => selectFavoriteListIdsArray(state)),
        distinctUntilChanged(),
        takeUntil(this.destroy$),
      )
      .subscribe((ids) => {
        this.favoriteListIds = ids;
        this.getFavoritesVideosById();
      });
  }

  private initializeEffects() {
    effect(
      () => {
        const favoriteVideos = YoutubeService.videoDetailsByIdSignal();
        if (favoriteVideos.length > 0) {
          this.favoriteVideos = this.favoriteVideos.concat(favoriteVideos);
          this.store.dispatch(
            loadFavoriteCardsSuccess({ cards: this.favoriteVideos }),
          );
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const error = YoutubeService.errorSignal();
        if (error) {
          this.store.dispatch(loadYouTubeCardsFailure({ error }));
        }
      },
      { allowSignalWrites: true },
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getFavoritesVideosById(): void {
    this.favoriteListIds.forEach((id) => {
      this.youtubeService.getById(id);
    });
  }
}
