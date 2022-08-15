// tslint:disable-next-line:max-line-length
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LocalstoragehelperService} from '../system/localstoragehelper.service';

@Injectable()
export class TrueSysInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private localstorage: LocalstoragehelperService
    ) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<
        | HttpSentEvent
        | HttpHeaderResponse
        | HttpProgressEvent
        | HttpResponse<any>
        | HttpUserEvent<any>
    > {
        request = request.clone({
            setHeaders: {
                Authorization:
                    'Bearer ' + this.localstorage.AuthencationToken(),
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        // process successful responses here
                    }
                },
                (error: any) => {
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 401) {
                            this.router.navigateByUrl('/login');
                        } else {
                            //MESSAGEHELPER.ErrorMessage(error.message);
                        }
                    }
                }
            )
        );
    }
}
