import {Component, OnInit} from '@angular/core';
import {Video} from '../Video';
import {VideosService} from '../videos.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos: Video[];

  constructor(private videoService: VideosService) {
  }

  ngOnInit() {
    this.videos = this.videoService.videos;
  }
}
