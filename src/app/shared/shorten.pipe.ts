import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let dots = '';
    if (value.length > 25) dots = '...';
    return value.slice(0, 25) + dots;
  }

}
