import { FilterGeneral } from '@/entitymodels/filters';
import { APPCOMMON } from '@/helpers/ApplicationCommon';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '@services/notificationmaster.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddeditNotificationComponent } from '../addedit-notification/addedit-notification.component';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    tableTitle: string = 'NOTIFICATIONS';
    public rows = [];
    public totalRecords = 0;
    public pageSize = 10;
    public currentPage = 1;
    public searchstring = '';
    public _filter = new FilterGeneral();
    createddatetime: any;

    formatsDateTest: string[] = [
        'dd/MM/yyyy',
        'dd/MM/yyyy hh:mm:ss',
        'dd-MM-yyyy',
        'dd-MM-yyyy HH:mm:ss',
        'MM/dd/yyyy',
        'MM/dd/yyyy hh:mm:ss',
        'yyyy/MM/dd',
        'yyyy/MM/dd HH:mm:ss',
        'dd/MM/yy',
        'dd/MM/yy hh:mm:ss'
    ];

    constructor(
        private modalService: NgbModal,
        private apiService: NotificationService,
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
        const modalRef = this.modalService.open(AddeditNotificationComponent, {
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
        const modalRef = this.modalService.open(AddeditNotificationComponent, {
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

    resetFilter() {
        this.searchstring = '';
        this.pageSize = 10;
        this.currentPage = 1;
        this.onPageChange();
    }

    dateNow: Date = new Date();
    dateNowISO = this.dateNow.toISOString();
    dateNowMilliseconds = this.dateNow.getTime();
}
