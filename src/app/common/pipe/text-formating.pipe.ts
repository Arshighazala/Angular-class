import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormating'
})
export class TextFormatingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
