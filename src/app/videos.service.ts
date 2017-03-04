import {Injectable} from '@angular/core';
import {Video} from './Video';

@Injectable()
export class VideosService {
  private items: Video[];

  get videos(): Video[] {
    return this.items;
  }

  constructor() {
    this.items = [
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
