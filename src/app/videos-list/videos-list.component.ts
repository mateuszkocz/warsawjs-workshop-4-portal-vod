import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Video} from '../Video';
import {VideosService} from '../videos.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos: Observable<Video[]>;
  count: Observable<number>;

  @Input()
  searchTerm: string;

  @Output()
  watchVideo = new EventEmitter<string>();

  constructor(private videoService: VideosService) {
  }

  ngOnInit() {
    this.videos = this.videoService.videos;
    this.count = this.videoService.videos.map(videos => videos.length);
  }

  toggleVideoLike(video: Video) {
    if (video.liked) {
      this.videoService.dislikeVideo(video.title);
    } else {
      this.videoService.likeVideo(video.title);
    }
  }

  openSource(source: string) {
    this.watchVideo.emit(source);
  }

  trackFunction(index: number, video: Video) {
    return video.title;
  }
}
