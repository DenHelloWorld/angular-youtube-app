import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoDetailsData } from '../../models/youtube-video-detalis.interface';

@Pipe({
  name: 'filterSortYouTube',
  standalone: true,
})
export class FilterSortYouTubePipe implements PipeTransform {
  public transform(
    items: YouTubeVideoDetailsData[] | null,
    filterTitle: string,
    sortDate: string,
    sortViews: string,
  ): YouTubeVideoDetailsData[] {
    if (!items) {
      return [];
    }

    let filteredItems = [...items];

    // Фильтрация по названию
    if (filterTitle) {
      filteredItems = filteredItems.filter(item =>
        item.snippet.title.toLowerCase().includes(filterTitle.toLowerCase()),
      );
    }

    // Сортировка по дате
    if (sortDate.trim().length) {
      filteredItems = filteredItems.sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt).getTime();
        const dateB = new Date(b.snippet.publishedAt).getTime();
        return sortDate === 'asc' ? dateA - dateB : dateB - dateA;
      });
    }

    // Сортировка по просмотрам
    if (sortViews.trim().length) {
      filteredItems = filteredItems.sort((a, b) => {
        return sortViews === 'asc'
          ? +a.statistics.viewCount - +b.statistics.viewCount
          : +b.statistics.viewCount - +a.statistics.viewCount;
      });
    }

    return filteredItems;
  }
}
