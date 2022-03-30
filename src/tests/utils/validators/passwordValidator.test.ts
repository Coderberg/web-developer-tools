import {CheckboxesType} from "../../../types/passwordGenerator";
import isChangeAllowed from "../../../utils/validators/passwordValidator";

describe('isChangeAllowed() function test', () => {

    const allowedParams: CheckboxesType = {
        symbols: false,
        numbers: true,
        uppercase: false,
        lowercase: false,
        excludeSimilar: false,
    }

    test(`Change is allowed`, () => {
        expect(isChangeAllowed(allowedParams)).toBeTruthy();
    });

    const invalidParams = {...allowedParams}
    invalidParams.numbers = false;

    test(`Change is not allowed`, () => {
        expect(isChangeAllowed(invalidParams)).toBeFalsy();
    });
});
