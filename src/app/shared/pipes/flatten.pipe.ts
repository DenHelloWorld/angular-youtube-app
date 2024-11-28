import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  standalone: true,
})
export class FlattenPipe implements PipeTransform {
  transform<T>(input: T | T[] | T[][]): T[] {
    if (!Array.isArray(input)) {
      return [input];
    }

    const flattenArray = (arr: (T | T[])[]): T[] => {
      return arr.reduce((acc: T[], val: T | T[]) => {
        if (Array.isArray(val)) {
          acc.push(...flattenArray(val));
        } else {
          acc.push(val);
        }
        return acc;
      }, []);
    };

    return flattenArray(input as (T | T[])[]);
  }
}
