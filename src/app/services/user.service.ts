import { FilterGeneral, FilterUserManage } from '@/entitymodels/filters';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreHttpService } from './httpinterceptor/httpCoreService';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    apiControllerName = 'User';
    readonly apiControllerUserSubscription = 'UserSubscription';

    constructor(private http: CoreHttpService) { }

    GetProfile(): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetProfile',
            ''
        );
    }

    GetAllUsers(): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAllUsers',
            ''
        );
    }

    UpdateUser(entity: any) {
        return this.http.postRequest(
            this.apiControllerName + '/Update',
            entity
        );
    }

    GetAllPartner(filter: FilterUserManage): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAllPartner',
            filter
        );
    }
    GetChildUserForDDL(): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetChildUserForDDL',
            ''
        );
    }

    GetAllUsersByFilter(filter: FilterUserManage): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAllUsers',
            filter
        );
    }

    GetAllPartnersForDDL(): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAllPartnersForDDL',
            ''
        );
    }

    GetAllUsersForDDL(): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/GetAllUsersForDDL',
            ''
        );
    }

    Insert(entity: any) {
        return this.http.postRequest(
            this.apiControllerName + '/Insert',
            entity
        );
    }

    ExtendSubscription(entity: any) {
        return this.http.postRequest(
            this.apiControllerUserSubscription + '/ExtendSubscription',
            entity
        );
    }

    Update(model: any): Observable<any> {
        return this.http.postRequest(this.apiControllerName + '/Update', model);
    }

    ForgotPassword(email) {
        const query = '?email=' + email;
        return this.http.deleteRequest<any>(
            this.apiControllerName + '/ForgotPassword/' + query
        );
    }

    Delete(userId) {
        const query = '?userId=' + userId;
        return this.http.deleteRequest<any>(
            this.apiControllerName + '/Delete/' + query
        );
    }

    ActivateUser(userId) {
        const query = '?userId=' + userId;
        return this.http.postRequest(
            this.apiControllerName + '/ActivateUser/' + query,
            ''
        );
    }
    DeActivateUser(userId) {
        const query = '?userId=' + userId;
        return this.http.postRequest(
            this.apiControllerName + '/DeactivateUser/' + query,
            ''
        );
    }

    UpdateStatus(primarykey: string, status: boolean): Observable<any> {
        var postparemeters = {
            cust_id: primarykey,
            cust_status: status
        };
        return this.http.postRequest(
            this.apiControllerName + '/UpdateStatus',
            postparemeters
        );
    }

    GetAllClientsubscriptionByFilter(filter: FilterGeneral): Observable<any> {
        return this.http.postRequest(
            this.apiControllerUserSubscription + '/GetAll',
            filter
        );
    }

    ChangePassword(model: any): Observable<any> {
        return this.http.postRequest(
            this.apiControllerName + '/ChangePassword',
            model
        );
    }
}
