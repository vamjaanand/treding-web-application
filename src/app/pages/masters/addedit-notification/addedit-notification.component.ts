import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from '@services/notificationmaster.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-addedit-notification',
    templateUrl: './addedit-notification.component.html',
    styleUrls: ['./addedit-notification.component.scss']
})
export class AddeditNotificationComponent implements OnInit {
    modalTitle: string = 'ADD NOTIFICATION';
    @Input() entityValue;
    @Input() is_edit;
    ISEDIT = false;
    submitted = false;

    saveForm = this.fb.group({
        nm_id: [''],
        nm_title: ['', [Validators.required]],
        nm_description: ['']
    });

    constructor(
        private toastyService: ToastrService,
        private fb: FormBuilder,
        private activeModal: NgbActiveModal,
        private spinner: NgxSpinnerService,
        private apiService: NotificationService
    ) {}

    get f() {
        return this.saveForm.controls;
    }

    ngOnInit() {
        if (this.is_edit) {
            this.modalTitle = 'EDIT NOTIFICATION';
            this.ISEDIT = true;
            this.saveForm.controls.nm_id.setValue(this.entityValue.nm_id);
            this.saveForm.controls.nm_title.setValue(this.entityValue.nm_title);
            this.saveForm.controls.nm_description.setValue(
                this.entityValue.nm_description
            );
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
}
