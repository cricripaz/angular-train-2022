import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upbConcat',

})
export class PipeTestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + '- soy el pipe';
  }

}
