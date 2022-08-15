import {Component, OnInit, NgModule} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '@services/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MustMatch} from '@/helpers/must-match.validator';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    public changePasswordForm: FormGroup;
    submitted: boolean = false;
    pageTitle: string = 'CHANGE PASSWORD';

    constructor(
        private toastr: ToastrService,
        private userService: UserService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.changePasswordForm = new FormGroup({
            oldPassword: new FormControl(null, Validators.required),
            newPassword: new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(100)
            ]),
            confirmPassword: new FormControl(null, Validators.required)
        });
    }

    get f() {
        return this.changePasswordForm.controls;
    }

    changePassword() {
        this.submitted = true;
        MustMatch('newPassword', 'confirmPassword')(this.changePasswordForm);
        if (this.changePasswordForm.valid) {
            this.spinner.show();
            this.userService
                .ChangePassword(this.changePasswordForm.value)
                .subscribe(
                    (data: any) => {
                        this.spinner.hide();
                        this.submitted = false;
                        if (data.ResponseStatus) {
                            this.changePasswordForm.reset();
                            this.toastr.success(data.ResponseMessage);
                            localStorage.clear();
                            this.router.navigate(['/login']);
                        } else {
                            this.toastr.error(data.ResponseMessage);
                        }
                    },
                    (error: HttpErrorResponse) => {
                        this.spinner.hide();
                        this.toastr.error(error.error.Message);
                    }
                );
        }
    }
}
