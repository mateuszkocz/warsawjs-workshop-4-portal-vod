import {Pipe, PipeTransform} from '@angular/core';
import {Video} from './Video';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(videos: Video[], term: string): Video[] {
    return term ? videos.filter(video => video.title.toLowerCase().includes(term.toLowerCase())) : videos;
  }

}
