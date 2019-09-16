import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialRemover'
})
export class SpecialRemoverPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newVal = value.replace(/[^\w\s]/gi, '').trim();
    return newVal.charAt(0).toUpperCase() + newVal.slice(1);
  }

}
