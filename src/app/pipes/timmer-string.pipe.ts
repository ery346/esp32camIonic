import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timmerString'
})
export class TimmerStringPipe implements PipeTransform {

  transform( value: number): string {

    // console.log(value);
    
    // if (value.toString() === '500') {
    //   return '.5s';
    // }
    // if (value.toString() === '1000') {
    //   return '1s';
    // }
    // if (value.toString() === '3000') {
    //   return '3s';
    // }
    // if (value.toString() === '5000') {
    //   return '5s';
    // }
    // if (value === undefined) {
    //   return '3s';
    // }
    switch (String(value)) {
      case '500':
        return '.5s' ;
        break;
    
      case '1000':
        return '1s';
        break;
    
      case '3000':
        return '3s';
        break;
    
      case '5000':
        return '5s';
        break;
      default:
        return '3s';
        break;
    }
  }

  
}
