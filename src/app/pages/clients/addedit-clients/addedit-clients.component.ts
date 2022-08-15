import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomValidators} from '@services/customvalidators';
import {UserService} from '@services/user.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-addedit-clients',
    templateUrl: './addedit-clients.component.html',
    styleUrls: ['./addedit-clients.component.scss']
})
export class AddeditClientsComponent implements OnInit {
    modalTitle = 'ADD CLIENTS';
    @Input() entityValue;
    @Input() is_edit;
    ISEDIT = false;
    submitted = false;
    base64textString = '';

    constructor(
        private fb: FormBuilder,
        private toastyService: ToastrService,
        private activeModal: NgbActiveModal,
        private spinner: NgxSpinnerService,
        private apiService: UserService,
        private customvalidation: CustomValidators
    ) {}

    saveForm = this.fb.group({
        user_id: [''],
        user_name: [''],
        user_companyname: [''],
        user_contactno: ['', [Validators.maxLength(10)]],
        user_address: [''],
        user_city: [''],
        user_pincode: [''],
        user_profileimage: [''],
        user_fileurl: [''],
        password: [''],
        fileToUpload: [''],
        user_level: [''],
        user_email: ['', [this.customvalidation.emailValidator]]
    });

    get f() {
        return this.saveForm.controls;
    }

    ngOnInit() {
        if (this.is_edit) {
            this.modalTitle = 'EDIT CLIENTS';
            this.ISEDIT = true;
            this.saveForm.controls.user_id.setValue(this.entityValue.user_id);
            this.saveForm.controls.user_name.setValue(
                this.entityValue.user_name
            );
            this.saveForm.controls.user_companyname.setValue(
                this.entityValue.user_companyname
            );
            this.saveForm.controls.user_contactno.setValue(
                this.entityValue.user_contactno
            );
            this.saveForm.controls.user_email.setValue(
                this.entityValue.user_email
            );
            this.saveForm.controls.user_address.setValue(
                this.entityValue.user_address
            );
            this.saveForm.controls.user_city.setValue(
                this.entityValue.user_city
            );
            this.saveForm.controls.user_pincode.setValue(
                this.entityValue.user_pincode
            );
            this.saveForm.controls.user_profileimage.setValue(
                this.entityValue.user_profileimage
            );
            this.saveForm.controls.user_fileurl.setValue(
                this.entityValue.user_fileurl
            );
            this.saveForm.controls.password.setValue(this.entityValue.password);
            this.saveForm.controls.fileToUpload.setValue(
                this.entityValue.fileToUpload
            );
            this.saveForm.controls.user_level.setValue(
                this.entityValue.user_level
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

    handleFileSelect(evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
    }

    onCancel() {
        this.activeModal.dismiss(false);
    }

    numberOnly(event): boolean {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
