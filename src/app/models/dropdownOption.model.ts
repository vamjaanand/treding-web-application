export interface dropdownOption {
    key: string;
    value: number;
}

export const operationTypes: dropdownOption[] = [
    {
        key: 'read',
        value: 1
    },
    {
        key: 'write',
        value: 2
    }
];

export const executionTypes: dropdownOption[] = [
    {
        key: 'auto',
        value: 1
    },
    {
        key: 'manual',
        value: 2
    }
];

export const dataTypes: dropdownOption[] = [
    {
        key: 'none',
        value: 1
    },
    {
        key: 'float',
        value: 2
    },
    {
        key: 'int',
        value: 3
    },
    {
        key: 'string',
        value: 4
    },
    {
        key: 'decimal',
        value: 5
    }
];

export const functionCodes: dropdownOption[] = [
    {
        key: '01 (01 hex) - Read - Discrete Output Coils',
        value: 1
    },
    {
        key: '05 (05 hex) - Write single - Discrete Output Coil',
        value: 2
    },
    {
        key: '15 (0F hex) - Write multiple - Discrete Output Coils',
        value: 3
    },
    {
        key: '02 (02 hex) - Read - Discrete Input Contacts',
        value: 4
    },
    {
        key: '04 (04 hex) - Read - Analog Input Registers',
        value: 5
    },
    {
        key: '03 (03 hex) - Read - Analog Output Holding Registers',
        value: 6
    },
    {
        key: '06 (06 hex) - Write single - Analog Output Holding Register',
        value: 7
    },
    {
        key: '16 (10 hex) - Write multiple - Analog Output Holding Registers',
        value: 8
    }
];

export const operationList: dropdownOption[] = [
    {
        key: 'Read Angle & Current Value',
        value: 1
    },
    {
        key: 'Angle Write in EEPROM',
        value: 2
    },
    {
        key: 'Angle Read from EEPROM',
        value: 3
    },
    {
        key: 'RTC Set',
        value: 4
    },
    {
        key: 'RTC Read',
        value: 5
    },
    {
        key: 'Wind',
        value: 6
    },
    {
        key: 'Reset',
        value: 7
    },
    {
        key: 'Fix Tilt',
        value: 8
    },
    {
        key: 'Motor Stop',
        value: 9
    },
    {
        key: 'Tilt Limit',
        value: 10
    },
    {
        key: 'Tilt Offset',
        value: 11
    }
];
