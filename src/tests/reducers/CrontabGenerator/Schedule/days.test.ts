import days from "../../../../reducers/CrontabGenerator/Schedule/days";
import {
    setDayHasError,
    setDaysOptionValue,
    setDaysRadioButtonValue
} from "../../../../actions/CrontabGenerator/Schedule/days";
import {PeriodContainerStateInterface} from "../../../../types/crontabGenerator";

describe('days reducer', () => {

    const initialState: PeriodContainerStateInterface = {
        selectedRadio: 'Every Day',
        selectedOption: [],
        hasError: false,
    }

    it("should handle initial state", () => {
        expect(days(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle radio button change", () => {
        const actual = days(initialState, setDaysRadioButtonValue('Every Half Month'));
        expect(actual.selectedRadio).toEqual('Every Half Month');
    });

    const selectedOptions = [{name: 6, code: 6}];

    it("should handle option change", () => {
        const actual = days(initialState, setDaysOptionValue(selectedOptions));
        expect(actual.selectedOption).toEqual(selectedOptions);
    });

    it("should handle 'hasError' value change", () => {
        const actual = days(initialState, setDayHasError(true));
        expect(actual.hasError).toEqual(true);
    });

});
