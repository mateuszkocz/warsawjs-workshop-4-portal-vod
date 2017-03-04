import {Injectable} from '@angular/core';
import {Video} from './Video';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/scan';

@Injectable()
export class VideosService {
  private actions: BehaviorSubject<{ type: string, payload?: any }>;
  private items: Observable<Video[]>;

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
        rating: 5,
        source: '/assets/video2.mp4'
      }, {
        description: 'Description',
        title: 'Slow & Lazy',
        image: 'https://unsplash.it/320/250?image=100',
        liked: true,
        rating: 2,
        source: '/assets/video.mp4'
      }, {
        description: 'Description',
        title: 'Iron Man III',
        image: 'https://unsplash.it/320/250?image=200',
        liked: false,
        rating: 2,
        source: '/assets/video2.mp4'
      }, {
        description: 'Description',
        title: 'Back to the future',
        image: 'https://unsplash.it/320/250?image=300',
        liked: true,
        rating: 2,
        source: '/assets/video.mp4'
      }
    ];

    this.actions = new BehaviorSubject<{ type: string, payload?: any }>({type: 'START'});
    this.items = this.actions.scan((state, action) => {
      switch (action.type) {
        case 'ADD_VIDEOS':
          return [...state, ...action.payload];
        case 'ADD_VIDEO':
          return [...state, action.payload];
        case 'LIKE_VIDEO':
          return state.map((video: Video) => {
            if (video.title === action.payload) {
              return Object.assign({}, video, {liked: true});
            } else {
              return video;
            }
          });
        case 'DISLIKE_VIDEO':
          return state.map((video: Video) => {
            if (video.title === action.payload) {
              return Object.assign({}, video, {liked: false});
            } else {
              return video;
            }
          });
        default:
          return state;
      }
    }, [] as Video[]);

    this.actions.next({type: 'ADD_VIDEOS', payload: items});

    setTimeout(() => {
      this.actions.next({
        type: 'ADD_VIDEO',
        payload: {
          rating: 4,
          liked: true,
          description: 'Description',
          title: 'Lion King',
          image: 'https://unsplash.it/320/250?image=400',
          source: '/assets/video2.mp4'
        }
      });
    }, 5000);
  }

  likeVideo(title: string) {
    this.actions.next({type: 'LIKE_VIDEO', payload: title});
  }

  dislikeVideo(title: string) {
    this.actions.next({type: 'DISLIKE_VIDEO', payload: title});
  }
}
