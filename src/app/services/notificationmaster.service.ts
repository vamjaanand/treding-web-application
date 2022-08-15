import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoreHttpService} from './httpinterceptor/httpCoreService';
import {FilterGeneral} from '../entitymodels/filters';

@Injectable({providedIn: 'root'})
export class NotificationService {
    readonly apiControllerName = 'NotificationMaster';

    constructor(private http: CoreHttpService) {}

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

    Delete(primaryKeyId) {
        const query = '?primaryKey=' + primaryKeyId;
        return this.http.deleteRequest<any>(
            this.apiControllerName + '/Delete/' + query
        );
    }
}
