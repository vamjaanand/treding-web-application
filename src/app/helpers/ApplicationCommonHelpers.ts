import {DatePipe} from '@angular/common';
import {Injectable} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class APPCOMMONHELPERS {
    static parseDate(datestring: string): NgbDateStruct {
        let returnVal: NgbDateStruct;

        let datePipe = new DatePipe('en-US');
        let dateParts = datePipe.transform(datestring, 'yyyy-MM-dd').split('-');
        returnVal = {
            year: parseInt(dateParts[0]),
            month: parseInt(dateParts[1]),
            day: parseInt(dateParts[2])
        };
        return returnVal;
    }
}
