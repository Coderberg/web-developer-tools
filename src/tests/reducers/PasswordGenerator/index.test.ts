import {
    CheckboxesType,
    PasswordGeneratorStateInterface
} from "../../../types/passwordGenerator";
import passwordGenerator from "../../../reducers/PasswordGenerator";
import {
    setCheckedParam, setCopyToClipboardState,
    setPassword,
    setPasswordLength
} from "../../../actions/PasswordGenerator/passwordGenerator";

describe('password generator reducer', () => {

    const initialState: PasswordGeneratorStateInterface = {
        checked: {
            symbols: true,
            numbers: true,
            uppercase: true,
            lowercase: true,
            excludeSimilar: false,
        },
        passwordLength: '16',
        copyToClipboardButtonState: 'default',
        result: '',
    }

    it("should handle initial state", () => {
        expect(passwordGenerator(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle Password change", () => {
        const actual = passwordGenerator(initialState, setPassword('VZfezXEnWRmK'));
        expect(actual.result).toEqual('VZfezXEnWRmK');
    });

    it("should handle Password Length change", () => {
        const actual = passwordGenerator(initialState, setPasswordLength('31'));
        expect(actual.passwordLength).toEqual('31');
    });

    const newCheckboxState: CheckboxesType = {
        symbols: false,
        numbers: true,
        uppercase: false,
        lowercase: false,
        excludeSimilar: true,
    }

    it("should handle checkbox change", () => {
        const actual = passwordGenerator(initialState, setCheckedParam(newCheckboxState));
        expect(actual.checked).toEqual(newCheckboxState);
    });

    it("should handle copy button click", () => {
        const actual = passwordGenerator(initialState, setCopyToClipboardState('pressed'));
        expect(actual.copyToClipboardButtonState).toEqual('pressed');
    });

});
