import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  // Source: https://stackoverflow.com/questions/44669340/how-to-truncate-text-in-angular2
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...'): string {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }

}
