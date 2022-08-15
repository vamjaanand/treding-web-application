import {Pipe, PipeTransform} from '@angular/core';

/* Truncate text with specified input */

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(val, args) {
        if (args === undefined || val === undefined) {
            return val;
        }

        if (val.length > args) {
            return val.substring(0, args) + '...';
        } else {
            return val;
        }
    }
}
