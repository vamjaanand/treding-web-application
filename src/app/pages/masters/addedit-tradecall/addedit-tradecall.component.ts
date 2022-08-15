import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TradeCallService } from '@services/tradecall.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-addedit-tradecall',
    templateUrl: './addedit-tradecall.component.html',
    styleUrls: ['./addedit-tradecall.component.scss']
})
export class AddeditTradecallComponent implements OnInit {
    public scriptlist = [];
    modalTitle = 'ADD TRADE CALL';
    @Input() entityValue;
    @Input() is_edit;
    ISEDIT = false;
    submitted = false;

    constructor(
        private activeModal: NgbActiveModal,
        private apiService: TradeCallService,
        private toastyService: ToastrService,
        private fb: FormBuilder,
        private spinner: NgxSpinnerService
    ) { }

    saveForm = this.fb.group({
        tc_id: [''],
        tc_script: [''],
        tc_buysell: [1, ''],
        tc_entryprice: [0, ''],
        tc_stoploss: [0, ''],
        tc_target1: [0, ''],
        tc_target2: [0, ''],
        tc_type: [''],
        tc_status: [''],
        tc_segment: ['']
    });

    get f() {
        return this.saveForm.controls;
    }

    ngOnInit() {
        if (this.is_edit) {
            this.modalTitle = 'EDIT TRADECALL';
            this.ISEDIT = true;
            this.saveForm.controls.tc_id.setValue(this.entityValue.tc_id);
            this.saveForm.controls.tc_script.setValue(
                this.entityValue.tc_script
            );
            this.saveForm.controls.tc_buysell.setValue(
                this.entityValue.tc_buysell
            );
            this.saveForm.controls.tc_entryprice.setValue(
                this.entityValue.tc_entryprice
            );
            this.saveForm.controls.tc_stoploss.setValue(
                this.entityValue.tc_stoploss
            );
            this.saveForm.controls.tc_target1.setValue(
                this.entityValue.tc_target1
            );
            this.saveForm.controls.tc_target2.setValue(
                this.entityValue.tc_target2
            );
            this.saveForm.controls.tc_type.setValue(this.entityValue.tc_type);
        }
    }

    onSubmitClick() {
        this.submitted = true;
        if (this.saveForm.valid) {
            if (this.ISEDIT) {
                this.Update();
            } else {
                this.Save();
            }
        }
    }

    Save() {
        this.spinner.show();
        this.saveForm.controls.tc_status.setValue(1);
        this.apiService.Insert(this.saveForm.value).subscribe(
            (data: any) => {
                this.spinner.hide();
                if (data.ResponseStatus) {
                    this.activeModal.dismiss(true);
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

    Update() {
        this.spinner.show();
        this.apiService.Update(this.saveForm.value).subscribe(
            (data: any) => {
                this.spinner.hide();
                if (data.ResponseStatus) {
                    this.activeModal.dismiss(true);
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

    onCancel() {
        this.activeModal.dismiss(false);
    }

    numberOnly(event): boolean {
        var charCode;
        if (event.keyCode > 0) {
            charCode = event.which || event.keyCode;
        } else if (typeof event.charCode != 'undefined') {
            charCode = event.which || event.keyCode;
        }
        if (charCode == 46) return true;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
        return true;
    }
}
