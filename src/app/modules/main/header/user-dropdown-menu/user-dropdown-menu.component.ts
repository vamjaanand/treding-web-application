import {LOCALSTORAGEKEYS} from '@/helpers/ApplicationConstant';
import {
    Component,
    OnInit,
    ViewChild,
    HostListener,
    ElementRef,
    Renderer2
} from '@angular/core';
import {LoginService} from '@services/login.services';
import {DateTime} from 'luxon';

@Component({
    selector: 'app-user-dropdown-menu',
    templateUrl: './user-dropdown-menu.component.html',
    styleUrls: ['./user-dropdown-menu.component.scss']
})
export class UserDropdownMenuComponent implements OnInit {
    public userName: string;

    @ViewChild('dropdownMenu', {static: false}) dropdownMenu;
    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hideDropdownMenu();
        }
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private loginService: LoginService
    ) {}

    ngOnInit(): void {
        this.userName = localStorage.getItem(LOCALSTORAGEKEYS.USERNAME);
    }

    toggleDropdownMenu() {
        if (this.dropdownMenu.nativeElement.classList.contains('show')) {
            this.hideDropdownMenu();
        } else {
            this.showDropdownMenu();
        }
    }

    showDropdownMenu() {
        this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
    }

    hideDropdownMenu() {
        this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
    }

    logout() {
        localStorage.clear();
        this.loginService.logout();
    }

    formatDate(date) {
        return DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }
}
