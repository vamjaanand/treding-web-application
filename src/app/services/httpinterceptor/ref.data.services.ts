import { Inject, Injectable } from '@angular/core';
import { CoreHelperService } from './core.helper.services';
import { MasterData } from './core.classes';

@Injectable()
export class RefDataCoreService {
    constructor(private corehelper: CoreHelperService) { }

    getRefDataByCode(codes: Array<string>): Array<MasterData> {
        const alldataInString = localStorage.getItem('refdata');
        const alldata = JSON.parse(alldataInString);
        const dataToReturn: Array<MasterData> = [];
        codes.forEach(code => {
            let foundData = alldata.ResponseObject.filter((data) => {
                return data.Code === code;
            });

            if (foundData !== undefined) {
                foundData = foundData;
                const dataToAdd = new MasterData();
                dataToAdd.code = foundData[0].Code;
                dataToAdd.values = foundData[0].Values;
                dataToReturn.push(dataToAdd);
            }
        });
        return dataToReturn;
    }
}
