import {FilterGeneral} from '@/entitymodels/filters';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoreHttpService} from './httpinterceptor/httpCoreService';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    apiControllerUP: string;

    apiControllerName = 'CurrentStatus';

    constructor(private http: CoreHttpService) {}

    GetAll(filter: FilterGeneral): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAll',
            filter
        );
    }
}
