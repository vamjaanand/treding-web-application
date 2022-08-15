import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoreHttpService} from './httpinterceptor/httpCoreService';
import {FilterGeneral} from '../entitymodels/filters';

@Injectable({
    providedIn: 'root'
})
export class AccountMasterService {
    apiControllerUP: string;

    apiControllerName = 'AccountMaster';

    constructor(private http: CoreHttpService) {}

    Insert(entity: any) {
        return this.http.postRequest(
            this.apiControllerName + '/Insert',
            entity
        );
    }

    Update(model: any): Observable<any> {
        return this.http.postRequest(this.apiControllerName + '/Update', model);
    }

    GetAll(filter: FilterGeneral): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAll',
            filter
        );
    }

    Delete(entityId) {
        const query = '?primarykey=' + entityId;
        return this.http.deleteRequest<any>(
            this.apiControllerName + '/Delete/' + query
        );
    }

    GetAllByStateId(state_id: any) {
        return this.http.postRequest(
            this.apiControllerName + '/GetAllByStateId',
            state_id
        );
    }

    GetById(item: any) {
        return this.http.postRequest(this.apiControllerName + '/GetById', item);
    }

    GetAllForDDL() {
        return this.http.postRequest(this.apiControllerName + '/GetAllDDL', '');
    }

    GetAllForDDLAllData(filter: FilterGeneral): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAll',
            filter
        );
    }
}
