import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Video} from '../Video';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent {
  @Input()
  video: Video;

  @Output()
  like = new EventEmitter<void>();

  @Output()
  watch = new EventEmitter<string>();

  likeVideo() {
    this.like.emit(null);
  }

  watchVideo() {
    this.watch.emit(this.video.source);
  }
}
