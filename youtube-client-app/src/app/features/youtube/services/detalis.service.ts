import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DetalisData } from '../models/detalisData';
import { Subscription } from 'rxjs';
import { YoutubeService } from './youtube.service';
import { Location } from '@angular/common';
import { Item } from '../models/youtube-response.model';

@Injectable({
  providedIn: 'root',
})
export class DetalisService {
  id: string = '';

  routeSubscription: Subscription | undefined;

  subscriptions: Subscription[] = [];

  datalisData: DetalisData = {
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
    const data: Item = this.youtubeservice.getById(id)[0];
    console.log(data);
    this.datalisData.channelTitle = data.snippet.channelTitle;
    this.datalisData.description = data.snippet.description;
    this.datalisData.publishedAt = data.snippet.publishedAt;
    console.log(this.datalisData.description);
  }

  openDetalis(id: string) {
    this.router.navigate(['/main/detalis', id]);
  }

  handleButtonBack() {
    // this.location.back();
    this.router.navigate(['/main']);
  }
}
