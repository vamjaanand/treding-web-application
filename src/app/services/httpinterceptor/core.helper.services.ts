import { Injectable } from '@angular/core';

@Injectable()
export class CoreHelperService {

    constructor() { }

    isNullEmptyOrWhiteSpace<T>(data: T) {
        return data === null || data === undefined;
    }

    isArrayEmpty<T>(data: Array<T>) {
        return data === null || data === undefined || data.length === 0;
    }

    isStringEmptyOrWhiteSpace(data: String) {
        return data === null || data === undefined || data.trim() === '';
    }
}
