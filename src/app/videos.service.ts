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
        image: 'https://unsplash.it/320/250?image=0',
        liked: false,
        rating: 5
      }, {
        description: 'Description',
        title: 'Slow & Lazy',
        image: 'https://unsplash.it/320/250?image=100',
        liked: true,
        rating: 2
      }, {
        description: 'Description',
        title: 'Iron Man III',
        image: 'https://unsplash.it/320/250?image=200',
        liked: false,
        rating: 2
      }, {
        description: 'Description',
        title: 'Back to the future',
        image: 'https://unsplash.it/320/250?image=300',
        liked: true,
        rating: 2
      }
    ];

    this.items = new BehaviorSubject<Video[]>([]);
    this.items.next(items);

    setTimeout(() => {
      this.items.next([...items, {
      }]);
          rating: 4,
          liked: true,
          description: 'Description',
          title: 'Lion King',
          image: 'https://unsplash.it/320/250?image=400'
    }, 5000);
  }

}
