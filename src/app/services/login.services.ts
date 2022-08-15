import {LOCALSTORAGEKEYS} from '@/helpers/ApplicationConstant';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CoreHttpService} from './httpinterceptor/httpCoreService';

@Injectable({providedIn: 'root'})
export class LoginService {
    user: any = null;

    constructor(private http: CoreHttpService, private router: Router) {}

    loginToSystem(username: string, password: string): Observable<any> {
        const dataToSend =
            'username=' +
            encodeURIComponent(username) +
            '&password=' +
            encodeURIComponent(password) +
            '&grant_type=password';
        return this.http.loginToSystem(dataToSend);
    }

    isLoggedIn() {
        if (localStorage.getItem(LOCALSTORAGEKEYS.AUTHENTICATIONTOKEN)) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.clear();
        this.user = null;
        this.router.navigate(['/login']);
    }
}
