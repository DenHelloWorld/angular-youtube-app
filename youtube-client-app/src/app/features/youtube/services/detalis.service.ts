import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DetalisData } from '../models/detalisData';
import { Subscription } from 'rxjs';
import { YoutubeService } from './youtube.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DetalisService {
  id: string = '';

  routeSubscription: Subscription | undefined;

  subscriptions: Subscription[] = [];

  SearchResultsData: DetalisData = {
    statistics: {
      likeCount: '',
      dislikeCount: '',
      viewCount: '',
      favoriteCount: '',
      commentCount: '',
    },
    img: {
      url: '',
      width: 0,
      height: 0,
    },
    description: '',
    channelTitle: '',
    publishedAt: '',
  };

  constructor(
    private router: Router,
    private youtubeservice: YoutubeService,
    private location: Location,
  ) {}

  turnOffSubscribes() {
    this.routeSubscription?.unsubscribe();
  }

  loadDetalisById(id: string) {
    const data = this.youtubeservice.getById(id);
    console.log(data);
  }

  openDetalis(id: string) {
    this.router.navigate(['/main/detalis', id]);
  }

  handleButtonBack() {
    this.location.back();
  }
}
