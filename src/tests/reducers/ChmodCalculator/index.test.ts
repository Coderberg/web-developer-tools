import chmodCalculator from "../../../reducers/ChmodCalculator";
import {
    setChecked,
    setNumberFieldValue,
    setTextFieldValue
} from "../../../actions/ChmodCalculator/chmodCalculator";
import {ChmodCalculatorContainerStateType} from "../../../types/chmodCalculator";

describe('chmod calculator reducer', () => {

    const initialState: ChmodCalculatorContainerStateType = {
        checked: {
            ownerRead: false,
            ownerWrite: false,
            ownerExecute: false,
            groupRead: false,
            groupWrite: false,
            groupExecute: false,
            othersRead: false,
            othersWrite: false,
            othersExecute: false,
        },
        numberFieldValue: '000',
        textFieldValue: '---------'
    }

    it("should handle initial state", () => {
        expect(chmodCalculator(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle number change", () => {
        const actual = chmodCalculator(initialState, setNumberFieldValue('645'));
        expect(actual.numberFieldValue).toEqual('645');
    });

    it("should handle symbolic value change", () => {
        const actual = chmodCalculator(initialState, setTextFieldValue('rwxr-xr-x'));
        expect(actual.textFieldValue).toEqual('rwxr-xr-x');
    });

    const newCheckboxState = {
        ownerRead: false,
        ownerWrite: true,
        ownerExecute: false,
        groupRead: false,
        groupWrite: true,
        groupExecute: false,
        othersRead: false,
        othersWrite: false,
        othersExecute: true,
    }

    it("should handle checkbox change", () => {
        const actual = chmodCalculator(initialState, setChecked(newCheckboxState));
        expect(actual.checked).toEqual(newCheckboxState);
    });

});
