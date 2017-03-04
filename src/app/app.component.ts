import {AfterViewInit, Component, ElementRef, Renderer, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  source: string;
  modalVisible = false;

  @ViewChild('video')
  video: ElementRef;

  constructor(private renderer: Renderer) {
  }

  playVideo(source: string) {
    this.source = source;
    this.modalVisible = true;
    setTimeout(() => {
      this.renderer.invokeElementMethod(this.video.nativeElement, 'play');
    });
  }

  stopVideo() {
    this.source = null;
    this.modalVisible = false;
    setTimeout(() => {
      this.renderer.invokeElementMethod(this.video.nativeElement, 'pause');
    });
  }

  ngAfterViewInit() {
    // Make sure the video works.
    // console.log('Just ', this.video);
  }
}
