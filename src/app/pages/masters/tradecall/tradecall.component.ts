import { FilterGeneral } from '@/entitymodels/filters';
import { APPCOMMON } from '@/helpers/ApplicationCommon';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TradeCallService } from '@services/tradecall.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddeditTradecallComponent } from '../addedit-tradecall/addedit-tradecall.component';

@Component({
    selector: 'app-tradecall',
    templateUrl: './tradecall.component.html',
    styleUrls: ['./tradecall.component.scss']
})
export class TradecallComponent implements OnInit {
    tableTitle: string = 'TRADECALL';
    public rows = [];
    public totalRecords = 0;
    public pageSize = 10;
    public currentPage = 1;
    public searchstring = '';
    public oldStatus = 1;
    public _filter = new FilterGeneral();

    constructor(
        private modalService: NgbModal,
        private apiService: TradeCallService,
        private toastyService: ToastrService,
        private spinner: NgxSpinnerService,
    ) { }

    ngOnInit() {
        this.onPageChange();
    }

    onPageChange() {
        this._filter.PageSize = this.pageSize;
        this._filter.PageStart = this.currentPage;
        this._filter.searchstring = this.searchstring;
        this.spinner.show();
        this.apiService.GetAll(this._filter).subscribe(
            (data: any) => {
                this.spinner.hide();
                if (data.ResponseStatus) {
                    this.rows = data.ResponseObject;
                    this.totalRecords = data.TotalRecords;
                } else {
                    console.log(data);
                }
            },
            (error) => {
                this.spinner.hide();
                console.log(error);
            }
        );
    }

    addNew() {
        const modalRef = this.modalService.open(AddeditTradecallComponent, {
            backdrop: 'static',
            keyboard: true
        });
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

    editItem(item) {
        const modalRef = this.modalService.open(AddeditTradecallComponent, {
            backdrop: 'static',
            keyboard: true
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
                        this.toastyService.error(error);
                    }
                );
            }
        });
    }

    changeStatus(item) {
        APPCOMMON.ConfirmStatus((isConfirmed) => {
            if (isConfirmed) {
                this.apiService.UpdateStatus(item).subscribe(
                    (data: any) => {
                        if (data.ResponseStatus) {
                            this.onPageChange();
                            this.toastyService.success(data.ResponseMessage);
                        } else {
                            this.toastyService.error(data.ResponseMessage);
                        }
                    },
                    (error) => {
                        this.toastyService.error(error);
                    }
                );
            } else {
                this.onPageChange();
            }
        });
    }
}
