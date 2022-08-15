import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    HostBinding
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '@services/login.services';
import { LOCALSTORAGEKEYS } from '@/helpers/ApplicationConstant';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    @HostBinding('class') class = 'login-box';
    public loginForm: FormGroup;
    public isAuthLoading = false;

    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        private loginService: LoginService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) { }

    ngOnInit() {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });

        localStorage.clear();
    }

    loginByAuth2() {
        localStorage.clear();
        if (this.loginForm.valid) {
            this.spinner.show();
            this.isAuthLoading = true;
            this.loginService
                .loginToSystem(
                    this.loginForm.value['email'],
                    this.loginForm.value['password']
                )
                .subscribe(
                    (data: any) => {
                        this.spinner.hide();
                        this.isAuthLoading = false;
                        this.loginService.user = data;
                        localStorage.setItem(
                            LOCALSTORAGEKEYS.AUTHENTICATIONTOKEN,
                            data.access_token
                        );
                        localStorage.setItem(
                            LOCALSTORAGEKEYS.USERNAME,
                            data.userName
                        );
                        localStorage.setItem(
                            LOCALSTORAGEKEYS.USERROLE,
                            data.roles
                        );
                        this.toastr.success('Login Successful.');
                        this.router.navigate(['/dashboard']);
                    },
                    (error: HttpErrorResponse) => {
                        this.spinner.hide();
                        console.log(error);
                        this.isAuthLoading = false;
                        if (
                            error.error.error_description != '' &&
                            error.error.error_description != null
                        ) {
                            this.toastr.error(error.error.error_description);
                        } else {
                            this.toastr.error(
                                'Something Went Wrong.Please Try After Some Time'
                            );
                        }
                    }
                );
        } else {
            this.toastr.error('Please provide Username and Password');
        }
    }

    ngOnDestroy() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }
}
