import {
    checkboxesToChmodNumber, chmodNumberToString, chmodStringToCheckboxes
} from "../../../utils/calculators/chmodCalculator";

const validPairs = [
    {'number': '000', 'string': '---------'},
    {'number': '644', 'string': 'rw-r--r--'},
    {'number': '444', 'string': 'r--r--r--'},
    {'number': '666', 'string': 'rw-rw-rw-'},
    {'number': '755', 'string': 'rwxr-xr-x'},
    {'number': '777', 'string': 'rwxrwxrwx'}
];

describe('chmod number to chmod symbolic value', () => {

    validPairs.forEach((pair) => {
        test(`The chmod number ${pair.number} is correctly converted to ${pair.string}`, () => {
            expect(chmodNumberToString(pair.number))
                .toStrictEqual(pair.string);
        });
    });
});

describe('chmod symbolic value to chmod number', () => {

    validPairs.forEach((pair) => {
        test(`The chmod symbolic value "${pair.number}" is correctly converted to ${pair.string}`, () => {
            expect(checkboxesToChmodNumber(chmodStringToCheckboxes(pair.string)))
                .toStrictEqual(pair.number);
        });
    });
});
