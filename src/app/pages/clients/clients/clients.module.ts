import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2CompleterModule } from 'ng2-completer';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClientsRoutingModule,
        NgxSpinnerModule,
        NgbModule,
        NgSelectModule,
        NgbPaginationModule,
        NgApexchartsModule,
        Ng2CompleterModule,
    ],
    declarations: [ClientsComponent]
})
export class ClientslModule { }
