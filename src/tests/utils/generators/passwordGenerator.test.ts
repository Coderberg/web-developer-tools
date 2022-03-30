import generatePassword from "../../../utils/generators/passwordGenerator";
import {CheckboxesType} from "../../../types/passwordGenerator";

describe('generatePassword() function test', () => {

    const options: CheckboxesType = {
        symbols: true,
        numbers: true,
        uppercase: true,
        lowercase: true,
        excludeSimilar: false,
    }

    test(`Password length is 20 characters`, () => {
        expect(generatePassword('20', options)).toHaveLength(20)
    });

    test(`Password length is 16 characters`, () => {
        expect(generatePassword('16', options)).toHaveLength(16)
    });

    test(`Password length is 43 characters`, () => {
        expect(generatePassword('43', options)).toHaveLength(43)
    });
});
