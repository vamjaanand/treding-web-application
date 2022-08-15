export class FilterGeneral {
    searchstring: string;
    PageSize: number;
    PageStart: number;
}
export class FilterUserManage extends FilterGeneral {
    parentuserid: string;
    username: string;
    contactno: string;
    city: string;
    userlevel: number;
}
