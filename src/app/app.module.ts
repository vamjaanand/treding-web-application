import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '@modules/main/main.component';
import { HeaderComponent } from '@modules/main/header/header.component';
import { FooterComponent } from '@modules/main/footer/footer.component';
import { MenuSidebarComponent } from '@modules/main/menu-sidebar/menu-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NgbDateParserFormatter,
    NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { MessagesDropdownMenuComponent } from '@modules/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { Ng2CompleterModule } from 'ng2-completer';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from '@modules/main/header/user-dropdown-menu/user-dropdown-menu.component';
import { TrueSysInterceptor } from '@services/httpinterceptor/interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { NgbDateCustomParserFormatter } from './helpers/CustomDateAdapter';
import { TruncatePipe } from './helpers/TruncatePipe';
import { AddeditTradecallComponent } from './pages/masters/addedit-tradecall/addedit-tradecall.component';
import { AddeditNotificationComponent } from './pages/masters/addedit-notification/addedit-notification.component';
import { AddeditClientsComponent } from './pages/clients/addedit-clients/addedit-clients.component';
import { AddeditSubscriptionComponent } from './pages/clients/addedit-subscription/addedit-subscription.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        MessagesDropdownMenuComponent,
        UserDropdownMenuComponent,
        TruncatePipe,
        AddeditTradecallComponent,
        AddeditNotificationComponent,
        AddeditClientsComponent,
        AddeditSubscriptionComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxSpinnerModule,
        NgbModule,
        NgxUpperCaseDirectiveModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            progressBar: true,
            progressAnimation: 'increasing'
        }),
        NgSelectModule,
        NgbPaginationModule,
        NgApexchartsModule,
        FormsModule,
        Ng2CompleterModule
    ],
    exports: [TruncatePipe],
    providers: [
        {
            provide: NgbDateParserFormatter,
            useClass: NgbDateCustomParserFormatter
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TrueSysInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
