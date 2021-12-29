import months from "../../../../reducers/CrontabGenerator/Schedule/months";
import {
    setMonthHasError,
    setMonthsOptionValue, setMonthsRadioButtonValue
} from "../../../../actions/CrontabGenerator/Schedule/months";
import {PeriodContainerStateInterface} from "../../../../types/crontabGenerator";

describe('months reducer', () => {

    const initialState: PeriodContainerStateInterface = {
        selectedRadio: 'Every Month',
        selectedOption: [],
        hasError: false,
    }

    it("should handle initial state", () => {
        expect(months(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle radio button change", () => {
        const actual = months(initialState, setMonthsRadioButtonValue('Every 4 Months'));
        expect(actual.selectedRadio).toEqual('Every 4 Months');
    });

    const selectedOptions = [
        {name: 'April', code: 'April'},
        {name: 'May', code: 'May'},
    ];

    it("should handle option change", () => {
        const actual = months(initialState, setMonthsOptionValue(selectedOptions));
        expect(actual.selectedOption).toEqual(selectedOptions);
    });

    it("should handle 'hasError' value change", () => {
        const actual = months(initialState, setMonthHasError(true));
        expect(actual.hasError).toEqual(true);
    });

});
