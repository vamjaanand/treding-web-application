import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class APPCOMMON {
    static confirmDelete(callback) {
        Swal.fire({
            title: 'Are you sure ?',
            text: 'You will not be able to recover this record !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            callback(result.value);
        });
    }

    static confirmReset(callback) {
        Swal.fire({
            title: 'Are you sure ?',
            text: 'User will not able to login with old password.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, reset it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            callback(result.value);
        });
    }

    static ConfirmStatus(callback) {
        Swal.fire({
            title: 'Warning',
            text: 'Are You sure? You want to Change Status?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, change it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            callback(result.value);
        });
    }

    static ConfirmUpdateBalnce(callback) {
        Swal.fire({
            title: 'Warning',
            text: 'Are You sure? You want to update client balance?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            callback(result.value);
        });
    }

    static ConfirmActivate(callback) {
        Swal.fire({
            title: 'Warning',
            text: 'Are You sure? You want to activate user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, activate it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            callback(result.value);
        });
    }

    static ConfirmDeactivate(callback) {
        Swal.fire({
            title: 'Warning',
            text: 'Are You sure? You want to deactivate user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, deactivate it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            callback(result.value);
        });
    }

    static ConfirmProcessMessage(callback) {
        Swal.fire({
            title: 'Warning',
            text:
                'Are You sure? You want to send message to all selected contract ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Process',
            cancelButtonText: 'No'
        }).then((result) => {
            callback(result.value);
        });
    }

    static SuccessBox(message) {
        Swal.fire('Success', message, 'success');
    }

    static ErrorBox(message) {
        Swal.fire('Error', message, 'error');
    }
}
