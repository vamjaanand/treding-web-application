import { FilterUserManage } from '@/entitymodels/filters';
import { APPCOMMON } from '@/helpers/ApplicationCommon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '@services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-client-subscription',
    templateUrl: './client-subscription.component.html',
    styleUrls: ['./client-subscription.component.scss']
})
export class ClientSubscriptionComponent implements OnInit {
    tableTitle: string = 'CLIENT SUBSCRIPTION';
    public clientlist = [];
    public rows = [];
    public totalRecords = 0;
    public pageSize = 10;
    public currentPage = 1;
    public searchstring = '';
    public contactnumber = '';
    public status = -1;
    public _filter = new FilterUserManage();

    constructor(
        private router: Router,
        private apiService: UserService,
        private spinner: NgxSpinnerService,
        private toastyService: ToastrService
    ) { }

    ngOnInit() {
        this.onPageChange();
    }

    onPageChange() {
        this.spinner.show();
        this._filter.PageSize = this.pageSize;
        this._filter.PageStart = this.currentPage;
        this._filter.username = this.searchstring;
        this._filter.contactno = this.contactnumber;
        this._filter.userlevel = this.status;

        this.apiService
            .GetAllClientsubscriptionByFilter(this._filter)
            .subscribe(
                (data: any) => {
                    this.spinner.hide();
                    if (data.ResponseStatus) {
                        this.rows = data.ResponseObject;
                        this.totalRecords = data.TotalRecords;
                    } else {
                        this.toastyService.error(data.ResponseMessage);
                    }
                },
                (error) => {
                    this.toastyService.error(error);
                }
            );
    }

    resetFilter() {
        this.searchstring = '';
        this.contactnumber = '';
        this.status = -1;
        this.pageSize = this.pageSize;
        this.currentPage = 1;
        this.onPageChange();
    }
}
