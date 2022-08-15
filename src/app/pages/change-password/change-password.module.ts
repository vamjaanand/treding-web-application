import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2CompleterModule } from 'ng2-completer';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChangePasswordRoutingModule,
        NgxSpinnerModule,
        NgbModule,
        NgSelectModule,
        NgbPaginationModule,
        NgApexchartsModule,
        Ng2CompleterModule,
        ReactiveFormsModule
    ],
    declarations: [ChangePasswordComponent]
})
export class ChangepasswordModule { }
