import { HttpHeaders, HttpParams } from '@angular/common/http';

export class RequestOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe: 'events';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    constructor(initializer: Partial<RequestOptions>) {
        if (!!initializer) { Object.assign(this, initializer); }
    }
}

export class MasterData {
    code: string;
    values: Array<MasterDataValues>;
}

export class MasterDataValues {
    Id: string;
    EntityText: string;
    Display_index: number;
}

export class BaseServiceModel {
    CreatedBy: string;
    CreatedDateTime: Date;
    RowVersion: string;
    SystemDateTime: Date;
}