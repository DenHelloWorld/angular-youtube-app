import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DetalisData } from 'app/features/youtube/models/detalis-data';
import { YouTubeVideoData } from 'app/features/youtube/models/youtube-video-data.interface';
import { YoutubeService } from 'app/features/youtube/services/youtube.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  id: string = '';

  routeSubscription?: PushSubscription;

  subscriptions: Subscription[] = [];

  detailsData: DetalisData = {
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
    title: '',
  };

  constructor(private router: Router, private youtubeService: YoutubeService) {}

  turnOffSubscribes() {
    this.routeSubscription?.unsubscribe();
  }

  public loadDetailsById(id: string) {
    this.youtubeService.getById(id).subscribe((data: YouTubeVideoData[]) => {
      console.log('loadDetailsById', data);
      if (data.length > 0) {
        const video = data[0];
        this.detailsData.channelTitle = video.snippet.channelTitle;
        this.detailsData.description = video.snippet.description;
        this.detailsData.publishedAt = video.snippet.publishedAt;
        this.detailsData.statistics = video.statistics;
        this.detailsData.img.url = video.snippet.thumbnails.medium.url;
        this.detailsData.title = video.snippet.title;
      }
    });
  }

  openDetails(id: string) {
    this.router.navigate(['/main/details', id]);
  }

  handleButtonBack() {
    this.router.navigate(['/main']);
  }
}
