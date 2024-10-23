import { effect, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';
import { YoutubeService } from 'app/features/youtube/services/youtube.service';
import { loadFavoriteCardsSuccess } from 'app/redux/actions/favorite-card.actions';
import { loadYouTubeCardsFailure } from 'app/redux/actions/youtube-card.actions';
import { selectFavoriteListIdsArray } from 'app/redux/selectors/favorite-cards.selectors';
import { AppState } from 'app/redux/states/app.state';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteItemsService {
  public favoriteListIds: string[] = [];

  private favoriteVideosSubject = new BehaviorSubject<{
    [id: string]: YouTubeVideoDetailsData;
  }>({});

  public favoriteVideos$ = this.favoriteVideosSubject.asObservable();

  private state$: Observable<AppState>;

  constructor(
    private store: Store,
    private youtubeService: YoutubeService,
    public searchResultsService: SearchResultsService,
  ) {
    this.state$ = store as Observable<AppState>;
    this.initEffects();
    this.initState();
  }

  private get currentIds(): string[] {
    return Object.keys(this.favoriteVideosSubject.value);
  }

  public get favoriteVideosLength(): number {
    return this.currentIds.length;
  }

  private initState() {
    this.state$
      .pipe(
        map(state => selectFavoriteListIdsArray(state)),
        distinctUntilChanged(),
      )
      .subscribe(ids => {
        this.favoriteListIds = ids;
        this.getFavoritesVideosById();
      });
  }

  private initEffects(): void {
    effect(
      () => {
        const favoriteVideos = YoutubeService.videoDetailsByIdSignal();
        if (favoriteVideos.length > 0) {
          const updatedVideos = { ...this.favoriteVideosSubject.value };
          favoriteVideos.forEach(video => {
            updatedVideos[video.id] = video;
          });
          this.favoriteVideosSubject.next(updatedVideos);
          this.updateStore(updatedVideos);
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

  public getFavoritesVideosById(): void {
    const newIds = this.favoriteListIds.filter(id => !this.currentIds.includes(id));
    const removedIds = this.currentIds.filter(id => !this.favoriteListIds.includes(id));

    const updatedVideos = { ...this.favoriteVideosSubject.value };

    removedIds.forEach(id => {
      delete updatedVideos[id];
    });

    newIds.forEach(id => {
      this.youtubeService.getById(id);
    });

    this.favoriteVideosSubject.next(updatedVideos);
    this.updateStore(updatedVideos);
  }

  private updateStore(videos: { [id: string]: YouTubeVideoDetailsData }) {
    this.store.dispatch(
      loadFavoriteCardsSuccess({
        cards: Object.values(videos),
      }),
    );
  }
}
