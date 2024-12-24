import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'practice'
})
export class PracticePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //Pipe to return the value which is not null or empty
    if(value !== null && value !== undefined && value !== ''){
      return value;
    }
    return 'Faulty value';
  }

}
