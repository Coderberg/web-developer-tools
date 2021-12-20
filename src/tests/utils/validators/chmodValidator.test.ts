import {isNumberValid, isStringValid} from "../../../utils/validators/chmodValidator";

describe('validate chmod number', () => {

    const validValues = ['000', '644', '666', '755', '777'];

    validValues.forEach((number) => {
        test(`${number} is valid chmod number`, () => {
            expect(isNumberValid(number)).toBe(true);
        });
    });

    const invalidValues = ['778', '0666', '7755', 'abc', '---', '008', '955'];

    invalidValues.forEach((number) => {
        test(`${number} is invalid chmod number`, () => {
            expect(isNumberValid(number)).toBe(false);
        });
    });

});

describe('validate chmod string', () => {

    const validValues = ['---------', 'rw-r--r--', 'rwxrwxrwx', 'r-x-w----', 'rwx---rwx'];

    validValues.forEach((string) => {
        test(`${string} is valid chmod string`, () => {
            expect(isStringValid(string)).toBe(true);
        });
    });

    const invalidValues = ['----------', 'xrwxrwxrw', 'rwxrwxc--', 'xxxxxxxxx', 'wwwwwwwww'];

    invalidValues.forEach((string) => {
        test(`${string} is invalid chmod number`, () => {
            expect(isStringValid(string)).toBe(false);
        });
    });

});
