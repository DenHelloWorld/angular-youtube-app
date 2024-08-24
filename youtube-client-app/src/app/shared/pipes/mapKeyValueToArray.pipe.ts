import { Pipe, PipeTransform } from '@angular/core';
import { KeyValue } from '@angular/common';

@Pipe({ name: 'mapKeyValueToArray', standalone: true })
export class MapKeyValueToArrayPipe implements PipeTransform {
  transform<K, V>(input: KeyValue<K, V>[] | null): V[] | null {
    return input ? input.map((item) => item.value) : null;
  }
}
