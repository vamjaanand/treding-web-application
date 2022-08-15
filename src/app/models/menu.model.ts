import {state} from '@angular/animations';

export interface ChildrenItem {
    name: string;
    icon: string;
    url: string;
}

export interface MainMenuItem {
    name: string;
    url?: string;
    isOpen: boolean; //true for open
    state: boolean; //true for active link
    icon: string;
    children: ChildrenItem[];
}

export const menuItems: MainMenuItem[] = [
    {
        name: 'Dashboard',
        isOpen: false,
        state: false,
        url: '',
        icon: 'fas fa-tachometer-alt',
        children: null
    },
    {
        name: 'Masters',
        isOpen: false,
        state: false,
        icon: 'fab fa-medium',
        children: [
            {
                name: 'Script Master',
                icon: 'far fa-circle',
                url: '/scriptmaster'
            },
            {
                name: 'Notification Master',
                icon: 'far fa-circle',
                url: '/notoficationmaster'
            },
            {
                name: 'News Master',
                icon: 'far fa-circle',
                url: '/newsmaster'
            },
            {
                name: 'Tradecall Master',
                icon: 'far fa-circle',
                url: '/tradecallmaster'
            }
        ]
    },

    {
        name: 'Registers',
        isOpen: false,
        state: false,
        url: '',
        icon: 'far fa-registered',
        children: [
            {
                name: 'Partywise Register',
                icon: 'far fa-circle',
                url: '/partywise-register'
            },
            /* {
                name: 'Item Register',
                icon: 'far fa-circle',
                url: '/item-register'
            }, */
            {
                name: 'Seller Register',
                icon: 'far fa-circle',
                url: '/seller-register'
            },
            {
                name: 'Buyer Register',
                icon: 'far fa-circle',
                url: '/buyer-register'
            },
            /*  {
                name: 'Broker Register',
                icon: 'far fa-circle',
                url: '/broker-register'
            }, */
            {
                name: 'All Firm Register',
                icon: 'far fa-circle',
                url: '/all-firm-register'
            }
        ]
    }
];
