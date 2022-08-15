import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { AppButtonComponent } from '@components/app-button/app-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        NgxSpinnerModule
    ],
    declarations: [
        LoginComponent,
        AppButtonComponent
    ]
})
export class LoginModule { }
