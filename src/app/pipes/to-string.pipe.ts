import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  transform(value: Array<string>, separator: string): string {
    return value.join(separator);
  }

}
