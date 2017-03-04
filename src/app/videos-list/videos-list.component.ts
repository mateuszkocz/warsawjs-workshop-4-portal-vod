import {Component, OnInit} from '@angular/core';
import {Video} from '../Video';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos: Video[];

  constructor() {
  }

  ngOnInit() {
    this.videos = [
      {
        description: 'Description',
        title: 'Fast & Furious',
        image: '/assets/warsawjs-logo.png',
        liked: false,
        rating: 4
      }, {
        description: 'Description',
        title: 'Slow & Lazy',
        image: '/assets/warsawjs-logo.png',
        liked: true,
        rating: 5
      }
    ];
  }

}
