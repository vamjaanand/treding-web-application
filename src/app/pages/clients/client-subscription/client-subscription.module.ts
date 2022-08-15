import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2CompleterModule } from 'ng2-completer';
import { ClientSubscriptionComponent } from './client-subscription.component';
import { ClientSubscriptionRoutingModule } from './client-subscription-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClientSubscriptionRoutingModule,
        NgxSpinnerModule,
        NgbModule,
        NgSelectModule,
        NgbPaginationModule,
        NgApexchartsModule,
        Ng2CompleterModule,
    ],
    declarations: [ClientSubscriptionComponent]
})
export class ClientSubscriptionlModule { }
