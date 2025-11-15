import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteTypeLabel'
})
export class NoteTypeLabelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
