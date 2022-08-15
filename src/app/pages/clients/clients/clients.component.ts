import { FilterGeneral, FilterUserManage } from '@/entitymodels/filters';
import { APPCOMMON } from '@/helpers/ApplicationCommon';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '@services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddeditClientsComponent } from '../addedit-clients/addedit-clients.component';
import { AddeditSubscriptionComponent } from '../addedit-subscription/addedit-subscription.component';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
    tableTitle: string = 'CLIENTS';
    public rows = [];
    public totalRecords = 0;
    public pageSize = 10;
    public currentPage = 1;
    public searchstring = '';
    public contactnumber = '';
    public status = -1;
    public _filter = new FilterUserManage();

    constructor(
        private modalService: NgbModal,
        private apiService: UserService,
        private spinner: NgxSpinnerService,
        private toastyService: ToastrService
    ) { }

    ngOnInit() {
        this.onPageChange();
    }

    editItem(item) {
        const modalRef = this.modalService.open(AddeditClientsComponent, {
            keyboard: false
        });
        modalRef.componentInstance.entityValue = item;
        modalRef.componentInstance.is_edit = true;

        modalRef.result.then(
            (result) => { },
            (reason) => {
                if (reason) {
                    this.onPageChange();
                }
            }
        );
    }

    addExtDate(user_id: any) {
        const modalRef = this.modalService.open(AddeditSubscriptionComponent, {
            backdrop: 'static',
            keyboard: true
        });
        modalRef.componentInstance.userid = user_id;
        modalRef.result.then(
            (result) => {
                console.log(`Result : ${result}`);
            },
            (reason) => {
                if (reason) {
                    this.onPageChange();
                }
            }
        );

    }

    onPageChange() {
        this.spinner.show();
        this._filter.PageSize = this.pageSize;
        this._filter.PageStart = this.currentPage;
        this._filter.username = this.searchstring;
        this._filter.contactno = this.contactnumber;
        this._filter.userlevel = this.status;

        this.apiService.GetAllUsersByFilter(this._filter).subscribe(
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
                this.toastyService.error(error.error.Message);
            }
        );
    }

    deleteItem(primaryKey) {
        APPCOMMON.confirmDelete((isConfirmed) => {
            if (isConfirmed) {
                this.spinner.show();
                this.apiService.Delete(primaryKey).subscribe(
                    (data: any) => {
                        this.spinner.hide();
                        if (data.ResponseStatus) {
                            this.onPageChange();
                            this.toastyService.success(data.ResponseMessage);
                        } else {
                            this.toastyService.error(data.ResponseMessage);
                        }
                    },
                    (error) => {
                        this.spinner.hide();
                        this.toastyService.error(error.error.Message);
                    }
                );
            }
        });
    }
    changestatus(item) {
        APPCOMMON.ConfirmStatus((isConfirmed) => {
            if (isConfirmed) {
                if (item.user_status) {
                    this.apiService.DeActivateUser(item.user_id).subscribe(
                        (data: any) => {
                            if (data.ResponseStatus) {
                                this.onPageChange();
                                this.toastyService.success(
                                    data.ResponseMessage
                                );
                            } else {
                                this.toastyService.error(data.ResponseMessage);
                            }
                        },
                        (error) => {
                            this.toastyService.error(error.error.Message);
                        }
                    );
                } else {
                    this.apiService.ActivateUser(item.user_id).subscribe(
                        (data: any) => {
                            if (data.ResponseStatus) {
                                this.onPageChange();
                                this.toastyService.success(
                                    data.ResponseMessage
                                );
                            } else {
                                this.toastyService.error(data.ResponseMessage);
                            }
                        },
                        (error) => {
                            this.toastyService.error(error.error.Message);
                        }
                    );
                }
            }
        });
    }

    resetFilter() {
        this.searchstring = '';
        this.contactnumber = '';
        this.status = -1;
        this.pageSize = this.pageSize;
        this.currentPage = 1;
        this.onPageChange();
    }

    numberOnly(event): boolean {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
