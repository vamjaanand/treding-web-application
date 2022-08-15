import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';;
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2CompleterModule } from 'ng2-completer';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        NgxSpinnerModule,
        NgbModule,
        NgSelectModule,
        NgbPaginationModule,
        NgApexchartsModule,
        Ng2CompleterModule,
        ReactiveFormsModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
