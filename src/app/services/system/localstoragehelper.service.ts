import {LOCALSTORAGEKEYS} from '@/helpers/ApplicationConstant';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalstoragehelperService {
    constructor() {}

    public ClearLocalStorage() {
        localStorage.clear();
    }

    public AuthencationToken(tokenValue?: string) {
        if (!(tokenValue === null || tokenValue === undefined)) {
            this.setStorageValue(
                LOCALSTORAGEKEYS.AUTHENTICATIONTOKEN,
                tokenValue
            );
        }
        return this.getStorageValue(LOCALSTORAGEKEYS.AUTHENTICATIONTOKEN);
    }

    public UserRole(userrole?: string) {
        if (!(userrole === null || userrole === undefined)) {
            this.setStorageValue(LOCALSTORAGEKEYS.USERROLE, userrole);
        }
        return this.getStorageValue(LOCALSTORAGEKEYS.USERROLE);
    }

    // private method for get set local storage data
    private setStorageValue(storagekey: string, storageValue: string) {
        localStorage.setItem(storagekey, storageValue);
    }

    private getStorageValue(storageKey: string) {
        return localStorage.getItem(storageKey);
    }
}
