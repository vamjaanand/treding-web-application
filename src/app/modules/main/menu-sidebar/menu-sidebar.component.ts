import {LOCALSTORAGEKEYS} from '@/helpers/ApplicationConstant';
import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {LoginService} from '@services/login.services';
import {filter} from 'rxjs/operators';
import {MainMenuItem, menuItems} from '../../../models/menu.model';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    public userName: string;
    showNavTree: boolean = false; //toggles submenu in sidebar

    menuItems: MainMenuItem[] = menuItems;

    constructor(public loginService: LoginService, private router: Router) {}

    ngOnInit() {
        this.userName = localStorage.getItem(LOCALSTORAGEKEYS.USERNAME);

        this.setActiveMenu(this.router.url);

        this.router.events
            .pipe(filter((event) => event instanceof NavigationStart))
            .subscribe((event: NavigationStart) => {
                this.setActiveMenu(event.url);
            });
    }

    //closes other menus except the one selected
    onMenuItemOpen(item: MainMenuItem) {
        this.menuItems.forEach((m) => {
            if (m !== item) {
                m.isOpen = false;
            }
        });
    }

    setActiveMenu(url: string) {
        let index: number;
        let parentMenu: string = null;
        if (url === '/') {
            parentMenu = 'Dashboard';
        } else if (
            url == '/plant-master' ||
            url == '/table-master' ||
            url == '/unitmaster' ||
            url == '/packingmaster' ||
            url == '/paymenttypemaster' ||
            url == '/remarkmaster' ||
            url == '/deliverytypemaster' ||
            url == '/citymaster' ||
            url == '/statemaster' ||
            url.startsWith('/firm') ||
            url.startsWith('/account') ||
            url == '/deliverynotemaster' ||
            url == '/productmaster'
        ) {
            parentMenu = 'Masters';
        } else if (url.startsWith('/contract')) {
            parentMenu = 'Contract Master';
        } else if (
            url == '/partywise-register' ||
            url == '/item-register' ||
            url == '/seller-register' ||
            url == '/buyer-register' ||
            url == '/broker-register' ||
            url == '/all-firm-register'
        ) {
            parentMenu = 'Registers';
        }

        if (parentMenu) {
            index = this.menuItems.findIndex((m) => {
                return m.name === parentMenu;
            });
            if (index !== -1) {
                this.menuItems[index].state = true;
                this.menuItems[index].isOpen = true;
                //close other menus
                this.menuItems.forEach((m, i) => {
                    if (i !== index) {
                        m.state = false;
                    }
                });
            }
        } else {
            //if not any of the sidebar menus then set all inactive and closed
            this.menuItems.forEach((m) => {
                m.state = false;
                m.isOpen = false;
            });
        }
    }
}
