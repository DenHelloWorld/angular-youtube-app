import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { YoutubeService } from './youtube.service';
// import { Location } from '@angular/common';
import { YouTubeVideoData } from '../models/youtube-video-data.interface';
import { DetalisData } from '../models/detalis-data';

@Injectable({
  providedIn: 'root',
})
export class DetalisService {
  id: string = '';

  routeSubscription?: PushSubscription;

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

  constructor(private router: Router, private youtubeservice: YoutubeService) {}

  turnOffSubscribes() {
    this.routeSubscription?.unsubscribe();
  }

  loadDetalisById(id: string) {
    const data: YouTubeVideoData = this.youtubeservice.getById(id)[0];
    this.datalisData.channelTitle = data.snippet.channelTitle;
    this.datalisData.description = data.snippet.description;
    this.datalisData.publishedAt = data.snippet.publishedAt;
    this.datalisData.statistics = data.statistics;
    this.datalisData.img.url = data.snippet.thumbnails.medium.url;
  }

  openDetalis(id: string) {
    this.router.navigate(['/main/detalis', id]);
  }

  handleButtonBack() {
    // this.location.back();
    this.router.navigate(['/main']);
  }
}
