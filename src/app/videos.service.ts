import {Injectable} from '@angular/core';
import {Video} from './Video';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class VideosService {
  private items: BehaviorSubject<Video[]>;

  get videos(): Observable<Video[]> {
    return this.items;
  }

  constructor() {
    const items = [
      {
        description: 'Description',
        title: 'Fast & Furious',
        image: '/assets/warsawjs-logo.png',
        liked: false,
        rating: 5
      }, {
        description: 'Description',
        title: 'Slow & Lazy',
        image: '/assets/warsawjs-logo.png',
        liked: true,
        rating: 2
      }
    ];

    this.items = new BehaviorSubject<Video[]>([]);
    this.items.next(items);

    setTimeout(() => {
      this.items.next([...items, {
        rating: 4,
        liked: true,
        description: 'Description',
        title: 'Moderate & Active',
        image: '/assets/warsawjs-logo.png'
      }]);
    }, 5000);
  }

}
