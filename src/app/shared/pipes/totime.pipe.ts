import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value: number): string {
    let minute : number = Math.floor(value / 60)
    let seconde : number = value % 60 
    let response = (minute < 10 ? '0' : '') + minute + ' Minutes ' + (seconde < 10 ? '0':'') + seconde + ' secondes'
    return response
  }

}
