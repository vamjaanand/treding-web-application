export class CustomSearch {
    customeSearch(term: string, item: any) {
        return item.acc_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchProduct(term: string, item: any) {
        return item.prod_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchUnit(term: string, item: any) {
        return item.um_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchPacking(term: string, item: any) {
        return item.pm_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchPlant(term: string, item: any) {
        return item.plnm_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchDelivery(term: string, item: any) {
        return item.dnm_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchPayment(term: string, item: any) {
        return item.ptm_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchRemark(term: string, item: any) {
        return item.rm_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchState(term: string, item: any) {
        return item.state_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }
    customeSearchCity(term: string, item: any) {
        return item.city_name.toUpperCase().indexOf(term.toUpperCase()) === 0
            ? true
            : false;
    }

    getCommunicationType(type: number) {
        let typetext = '';
        if (type == 0) {
            typetext = 'SMS';
        }
        if (type == 1) {
            typetext = 'EMAIL';
        }
        if (type == 2) {
            typetext = 'BOTH';
        }
        if (type == 3) {
            typetext = 'NONE';
        }
        return typetext;
    }
}
