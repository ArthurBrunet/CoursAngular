import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameRacePipe'
})
export class NameRacePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let res = '';
    value = value.toUpperCase();
    for(let index = 0; index < value.length; index++){
      res += value[index] + '.';
    }
    return res;
  }

}
