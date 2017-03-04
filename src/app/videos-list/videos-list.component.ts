import {Component, OnInit} from '@angular/core';
import {Video} from '../Video';
import {VideosService} from '../videos.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos: Observable<Video[]>;
  videosOver3: Observable<Video[]>;
  videosIfMore: Observable<Video[]>;
  count: Observable<number>;
  ratingList: Observable<{ title: string, rating: string }[]>;

  timer: Observable<number>;
  every5sec: Observable<number>;
  powerTime: Observable<number>;

  constructor(private videoService: VideosService) {
  }

  ngOnInit() {
    this.timer = Observable.interval(1000);
    this.every5sec = this.timer.throttleTime(4000);
    this.powerTime = this.timer.map(value => value ** 2).take(200).do(value => console.log('Power', value)).startWith(-1000);
    this.every5sec.subscribe(value => console.log('Every 5 sec', value));

    this.videos = this.videoService.videos;
    this.videosOver3 = this.videoService.videos.map(videos => videos.filter(video => video.rating > 3));
    this.videosIfMore = this.videoService.videos.filter(videos => videos.length > 2);
    this.count = this.videoService.videos.map(videos => videos.length);
    this.ratingList = this.videoService.videos.map(videos => videos.map(({title, rating}) => ({
      title,
      rating: `${rating} / 5`
    })));
  }
}
