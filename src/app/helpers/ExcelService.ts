import {Injectable} from '@angular/core';
import {Workbook} from 'exceljs';
import * as fs from 'file-saver';
import {APPCOMMONHELPERS} from './ApplicationCommonHelpers';

@Injectable({
    providedIn: 'root'
})
export class ExcelService {
    constructor() {}

    async generateContractRegister(
        filename: string,
        data: any,
        daterange: string,
        firmname: string
    ) {
        // Excel Title, Header, Data
        const title = 'CONTRACT REGISTER';
        const header = [
            'CO.NO.',
            'DATE',
            'SELLER',
            'BUYER',
            'COMMODITY',
            'QTY.',
            'RATE',
            'PLANT',
            'DELIVERY',
            'PAYMENT',
            'REMARK'
        ];

        // Create workbook and worksheet
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet(filename);

        // Add Row and formatting
        const titleRow = worksheet.addRow([firmname]);
        titleRow.font = {size: 16, bold: true};
        titleRow.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fbd2b4'},
                bgColor: {argb: 'FF0000FF'}
            };
        });
        titleRow.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        const subTitleFirm = worksheet.addRow([title]);
        subTitleFirm.font = {size: 12, bold: true};
        subTitleFirm.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });
        // worksheet.addRow([]);
        const subTitleRow = worksheet.addRow(['DATE : ' + daterange]);
        subTitleRow.font = {size: 12};
        subTitleRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        // Blank Row
        worksheet.addRow([]);

        worksheet.mergeCells('A1:K1');
        worksheet.mergeCells('A2:K2');
        worksheet.mergeCells('A3:K3');
        worksheet.mergeCells('A4:K4');

        // Add Header Row
        const headerRow = worksheet.addRow(header);

        // Cell Style : Fill and Border
        headerRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'FFFFFF00'},
                bgColor: {argb: 'FF0000FF'}
            };
            cell.border = {
                top: {style: 'thin'},
                left: {style: 'thin'},
                bottom: {style: 'thin'},
                right: {style: 'thin'}
            };
        });

        // Add Data and Conditional Formatting
        data.forEach((d) => {
            // const row = worksheet.addRow(d);
            const row = worksheet.addRow([
                d.cm_contractno,
                APPCOMMONHELPERS.parseDate(d.cm_contractdate).day +
                    '-' +
                    APPCOMMONHELPERS.parseDate(d.cm_contractdate).month +
                    '-' +
                    APPCOMMONHELPERS.parseDate(d.cm_contractdate).year,
                d.sellername + ' - ' + d.sellercity,
                d.buyername + ' - ' + d.buyercity,
                d.prod_name,
                d.cm_quantity + ' ' + d.um_name,
                d.cm_rate,
                d.plnm_name,
                d.cm_delivery,
                d.cm_payment,
                d.cm_remark1
            ]);
        });

        worksheet.getColumn(2).width = 10; // date
        worksheet.getColumn(3).width = 25; // seller
        worksheet.getColumn(4).width = 25; // buyer
        worksheet.getColumn(5).width = 15; // commodity
        worksheet.getColumn(8).width = 15; // plant
        worksheet.getColumn(9).width = 15; // delivery
        worksheet.getColumn(11).width = 15; // remark
        worksheet.getColumn(12).width = 20; // broker
        worksheet.addRow([]);

        worksheet.autoFilter = {
            from: {
                row: 5,
                column: 1
            },
            to: {
                row: 5,
                column: 11
            }
        };

        // Generate Excel File with given name
        workbook.xlsx.writeBuffer().then((data: any) => {
            const blob = new Blob([data], {
                type:
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
            fs.saveAs(blob, filename + '.xlsx');
        });
    }

    async generateSellerRegister(
        filename: string,
        data: any,
        daterange: string,
        seller: string,
        comodity: string,
        firmname: string,
        productsummary: string
    ) {
        // Excel Title, Header, Data
        const title = 'SELLER REGISTER';
        const header = [
            'CO.NO.',
            'DATE',
            'BUYER',
            'CITY',
            'COMMODITY',
            'QTY.',
            'RATE',
            'PLANT',
            'DELIVERY',
            'PAYMENT',
            'REMARK'
        ];

        // Create workbook and worksheet
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet(filename);

        // Add Row and formatting
        const titleRow = worksheet.addRow([firmname]);
        titleRow.font = {size: 16, bold: true};
        titleRow.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fbd2b4'},
                bgColor: {argb: 'FF0000FF'}
            };
        });
        titleRow.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        // worksheet.addRow([]);
        const subTitleFirm = worksheet.addRow([title]);
        subTitleFirm.font = {size: 12, bold: true};
        subTitleFirm.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        const subTitleRow = worksheet.addRow(['SELLER : ' + seller]);
        subTitleRow.font = {size: 12, bold: true};
        subTitleRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        const subTitleRow2 = worksheet.addRow(['COMODITY : ' + comodity]);
        subTitleRow2.font = {size: 12};
        subTitleRow2.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        const subTitleRow3 = worksheet.addRow(['DATE : ' + daterange]);
        subTitleRow3.font = {size: 12};
        subTitleRow3.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });
        // Blank Row
        worksheet.addRow([]);

        worksheet.mergeCells('A1:K1');
        worksheet.mergeCells('A2:K2');
        worksheet.mergeCells('A3:K3');
        worksheet.mergeCells('A4:K4');
        worksheet.mergeCells('A5:K5');
        worksheet.mergeCells('A6:K6');

        // Add Header Row
        const headerRow = worksheet.addRow(header);
        headerRow.font = {size: 12, bold: true};
        // Cell Style : Fill and Border
        headerRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'FFFFFF00'},
                bgColor: {argb: 'FF0000FF'}
            };
            cell.border = {
                top: {style: 'thin'},
                left: {style: 'thin'},
                bottom: {style: 'thin'},
                right: {style: 'thin'}
            };
        });

        // Add Data and Conditional Formatting
        data.forEach((d) => {
            // const row = worksheet.addRow(d);
            const row = worksheet.addRow([
                d.cm_contractno,
                APPCOMMONHELPERS.parseDate(d.cm_contractdate).day +
                    '-' +
                    APPCOMMONHELPERS.parseDate(d.cm_contractdate).month +
                    '-' +
                    APPCOMMONHELPERS.parseDate(d.cm_contractdate).year,
                d.buyername,
                d.buyercity,
                d.prod_name,
                d.cm_quantity + ' ' + d.um_name,
                d.cm_rate,
                d.plnm_name,
                d.cm_delivery,
                d.cm_payment,
                d.cm_remark1
            ]);
        });

        worksheet.getColumn(2).width = 10;
        worksheet.getColumn(3).width = 25;
        worksheet.getColumn(5).width = 15;
        worksheet.getColumn(6).width = 15;
        worksheet.getColumn(8).width = 15;
        worksheet.getColumn(9).width = 15;
        worksheet.getColumn(10).width = 15;
        worksheet.getColumn(11).width = 15;
        worksheet.getColumn(12).width = 20;
        worksheet.addRow([]);

        worksheet.autoFilter = {
            from: {
                row: 7,
                column: 1
            },
            to: {
                row: 7,
                column: 10
            }
        };

        const summaryrow = worksheet.addRow([productsummary]);
        summaryrow.font = {size: 12};
        summaryrow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        let count = 9 + data.length;
        worksheet.mergeCells('A' + (count - 1) + ':K' + (count - 1));
        worksheet.mergeCells('A' + count + ':K' + count);

        // Generate Excel File with given name
        workbook.xlsx.writeBuffer().then((data: any) => {
            const blob = new Blob([data], {
                type:
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
            fs.saveAs(blob, filename + '.xlsx');
        });
    }

    async generateBuyerRegister(
        filename: string,
        data: any,
        daterange: string,
        seller: string,
        comodity: string,
        firmname: string,
        productsummary: string
    ) {
        // Excel Title, Header, Data
        const title = 'BUYER REGISTER';
        const header = [
            'CO.NO.',
            'DATE',
            'SELLER',
            'CITY',
            'COMMODITY',
            'QTY.',
            'RATE',
            'PLANT',
            'DELIVERY',
            'PAYMENT',
            'REMARK'
        ];

        // Create workbook and worksheet
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet(filename);

        // Add Row and formatting
        const titleRow = worksheet.addRow([firmname]);
        titleRow.font = {size: 16, bold: true};
        titleRow.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fbd2b4'},
                bgColor: {argb: 'FF0000FF'}
            };
        });
        titleRow.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        const subTitleFirm = worksheet.addRow([title]);
        subTitleFirm.font = {size: 12, bold: true};
        subTitleFirm.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        const subTitleRow = worksheet.addRow(['BUYER : ' + seller]);
        subTitleRow.font = {size: 12, bold: true};
        subTitleRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        const subTitleRow2 = worksheet.addRow(['COMODITY : ' + comodity]);
        subTitleRow2.font = {size: 12};
        subTitleRow2.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        const subTitleRow3 = worksheet.addRow(['DATE : ' + daterange]);
        subTitleRow3.font = {size: 12};
        subTitleRow3.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });
        // Blank Row
        worksheet.addRow([]);
        worksheet.mergeCells('A1:K1');
        worksheet.mergeCells('A2:K2');
        worksheet.mergeCells('A3:K3');
        worksheet.mergeCells('A4:K4');
        worksheet.mergeCells('A5:K5');
        worksheet.mergeCells('A6:K6');

        // Add Header Row
        const headerRow = worksheet.addRow(header);
        headerRow.font = {size: 12, bold: true};
        // Cell Style : Fill and Border
        headerRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'FFFFFF00'},
                bgColor: {argb: 'FF0000FF'}
            };
            cell.border = {
                top: {style: 'thin'},
                left: {style: 'thin'},
                bottom: {style: 'thin'},
                right: {style: 'thin'}
            };
        });

        // Add Data and Conditional Formatting
        data.forEach((d) => {
            // const row = worksheet.addRow(d);
            const row = worksheet.addRow([
                d.cm_contractno,
                APPCOMMONHELPERS.parseDate(d.cm_contractdate).day +
                    '-' +
                    APPCOMMONHELPERS.parseDate(d.cm_contractdate).month +
                    '-' +
                    APPCOMMONHELPERS.parseDate(d.cm_contractdate).year,
                d.sellername,
                d.sellercity,
                d.prod_name,
                d.cm_quantity + ' ' + d.um_name,
                d.cm_rate,
                d.plnm_name,
                d.cm_delivery,
                d.cm_payment,
                d.cm_remark1
            ]);
        });

        worksheet.getColumn(2).width = 10;
        worksheet.getColumn(3).width = 25;
        worksheet.getColumn(5).width = 15;
        worksheet.getColumn(6).width = 15;
        worksheet.getColumn(8).width = 15;
        worksheet.getColumn(9).width = 15;
        worksheet.getColumn(10).width = 15;
        worksheet.getColumn(11).width = 15;
        worksheet.getColumn(12).width = 20;
        worksheet.addRow([]);

        worksheet.autoFilter = {
            from: {
                row: 7,
                column: 1
            },
            to: {
                row: 7,
                column: 10
            }
        };

        const summaryrow = worksheet.addRow([productsummary]);
        summaryrow.font = {size: 12};
        summaryrow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'fce9da'},
                bgColor: {argb: 'FF0000FF'}
            };
        });

        let count = 9 + data.length;
        worksheet.mergeCells('A' + (count - 1) + ':K' + (count - 1));
        worksheet.mergeCells('A' + count + ':K' + count);

        // Generate Excel File with given name
        workbook.xlsx.writeBuffer().then((data: any) => {
            const blob = new Blob([data], {
                type:
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
            fs.saveAs(blob, filename + '.xlsx');
        });
    }
}
