import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreHttpService } from './httpinterceptor/httpCoreService';
import { FilterGeneral } from '../entitymodels/filters';

@Injectable({ providedIn: 'root' })
export class TradeCallService {
    readonly apiControllerName = 'TradeCall';

    constructor(private http: CoreHttpService) { }

    GetAll(filter: FilterGeneral): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAll',
            filter
        );
    }

    Insert(entity: any) {
        return this.http.postRequest(
            this.apiControllerName + '/Insert',
            entity
        );
    }

    Update(model: any): Observable<any> {
        return this.http.postRequest(this.apiControllerName + '/Update', model);
    }

    UpdateStatus(entity: any) {
        return this.http.postRequest(
            this.apiControllerName + '/UpdateStatus',
            entity
        );
    }

    Delete(primaryKeyId) {
        const query = '?primarykey=' + primaryKeyId;
        return this.http.deleteRequest<any>(
            this.apiControllerName + '/Delete/' + query
        );
    }

    GetOpenCalls(filter: FilterGeneral): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAll',
            filter
        );
    }

    GetTodayCall(filter: FilterGeneral): Observable<any> {
        return this.http.postRequest(
             this.apiControllerName + '/GetTodayCall',
            filter
        );
    }
}
