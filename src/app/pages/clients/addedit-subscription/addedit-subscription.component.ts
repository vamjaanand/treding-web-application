import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '@services/user.service';
import { request } from 'http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addedit-subscription',
  templateUrl: './addedit-subscription.component.html',
  styleUrls: ['./addedit-subscription.component.scss']
})
export class AddeditSubscriptionComponent implements OnInit {
  modalTitle: string = 'EXTENDED SUBSCRIPTION';
  submitted = false;
  @Input() userid;
  public expirydate: NgbDateStruct;

  constructor(
    private toastyService: ToastrService,
    private fb: FormBuilder,
    private activeModal: NgbActiveModal,
    private spinner: NgxSpinnerService,
    private apiService: UserService,
    private calander: NgbCalendar,
  ) { }


  ngOnInit() {
    this.expirydate = this.calander.getToday();
  }

  Save() {
    let request = {
      userid: this.userid,
      enddate:
        this.expirydate.year.toString() +
        '-' +
        this.expirydate.month.toString() +
        '-' +
        this.expirydate.day.toString(),
    };
    this.spinner.show();
    this.apiService.ExtendSubscription(request).subscribe(
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
