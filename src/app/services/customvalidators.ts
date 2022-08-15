import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export class CustomValidators {
    emailValidator(c: FormControl) {
        const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(
            c.value
        );
        if (!!c.value) {
            if (isValid) {
                return null;
            } else {
                return {
                    emailvalidator: {
                        valid: false
                    }
                };
            }
        }
    }
}
