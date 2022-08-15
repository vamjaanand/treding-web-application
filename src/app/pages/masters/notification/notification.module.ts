import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2CompleterModule } from 'ng2-completer';
import { NotificationComponent } from './notification.component';
import { NotificationRoutingModule } from './notification-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NotificationRoutingModule,
        NgxSpinnerModule,
        NgbModule,
        NgSelectModule,
        NgbPaginationModule,
        NgApexchartsModule,
        Ng2CompleterModule,
    ],
    declarations: [NotificationComponent]
})
export class NotificationlModule { }
