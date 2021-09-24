import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, unite : string): number | string {
    if(unite.toLowerCase() == 'toc') return (value-32) * 5/9 ; 
    if(unite.toLowerCase() == 'tof') return (value*9/5) + 32  ; 
    return "Option invalide";
  }

}
