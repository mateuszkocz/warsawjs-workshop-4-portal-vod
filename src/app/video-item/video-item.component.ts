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

  likeVideo() {
    this.like.emit(null);
  }
}
