import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarise'
})
export class SummarisePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    return value.substring(0, 20)+ "...";
  }

}
