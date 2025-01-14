import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { RemoteService, MiscInfo } from '../remote.service';
import { LocalizeService } from '../localize.service';

/**
 * Data source for the TestTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class VideosDataSource extends MatTableDataSource<MiscInfo> {
  loading = true;

  constructor(
    private readonly remote: RemoteService,
    private readonly localize: LocalizeService,
    private readonly limit?: number,
    private readonly keyword?: string
  ) {
    super();
    this.setupFilter();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  override connect(): BehaviorSubject<MiscInfo[]> {
    this.loading = true;
    this.remote.getVideos()
      .pipe(
        map(videos => this.filterWithKeyword(videos)),
        map(videos => this.limit ? videos.slice(0, this.limit) : videos)
      ).subscribe(
        videos => { this.data = videos; },
        err => console.log(err),
        () => { this.loading = false; }
      );

    return super.connect();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  override disconnect(): void {
    super.disconnect();
  }

  private filterWithKeyword(videos: MiscInfo[]) {
    if (!this.keyword) {
      return videos;
    }
    const results: MiscInfo[] = [];
    videos.forEach(video => {
      if (this.keyword && video.title.toLowerCase().includes(this.keyword)) {
        results.push(video);
      }
    });
    return results;
  }

  private setupFilter() {
    this.filterPredicate = (data: MiscInfo, filters: string): boolean => {
      const matchFilter: boolean[] = [];
      const filterArray = filters.split('&');
      const columns: string[] = [
        data.title,
        data.date?.toDateString() ?? '',
        this.localize.transform(data.title, 'event')
      ];
      filterArray.forEach(filter => {
        const customFilter: boolean[] = [];
        columns.forEach(column =>
          customFilter.push(column.toLowerCase().includes(filter)));
        matchFilter.push(customFilter.some(Boolean)); // OR
      });
      return matchFilter.every(Boolean); // AND
    };
  }
}
