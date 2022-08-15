import { CoreHttpService } from './httpCoreService';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RefDataCoreService } from './ref.data.services';
import { CoreHelperService } from './core.helper.services';

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        CoreHttpService,
        RefDataCoreService,
        CoreHelperService
    ],
})
export class CoreModule { }
