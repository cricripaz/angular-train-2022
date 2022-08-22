import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upbSize'
})
export class SizesPipe implements PipeTransform {

  transform(value: number): any {


    if (value >= 0 && value <= 20){
      return  "XS"
    }else if (value >= 21 && value <= 30){
      return "S"
    }else if (value >= 31 && value <= 50){
      return "M"
    }else if (value >= 51 && value <= 70){
      return "L"
    }else {
      return "XL"
    }
  }

}
