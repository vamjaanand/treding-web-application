import {FilterGeneral} from '@/entitymodels/filters';
import {LOCALSTORAGEKEYS} from '@/helpers/ApplicationConstant';
import {Component, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();

    public firmlist = [];
    public _filter = new FilterGeneral();
    public selectedValue = '';
    public selectedFirmName = '';

    constructor(private toastyService: ToastrService, private router: Router) {}

    // ngOnInit(): void {}

    onFirmChangeReq() {
        this.router.navigate(['/selectfirm']);
    }
}
