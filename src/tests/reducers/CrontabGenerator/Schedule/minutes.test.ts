import minutes from "../../../../reducers/CrontabGenerator/Schedule/minutes";
import {
    setMinuteHasError, setMinutesOptionValue,
    setMinutesRadioButtonValue
} from "../../../../actions/CrontabGenerator/Schedule/minutes";
import {PeriodContainerStateInterface} from "../../../../types/crontabGenerator";

describe('minutes reducer', () => {

    const initialState: PeriodContainerStateInterface = {
        selectedRadio: 'Every Minute',
        selectedOption: [],
        hasError: false,
    }

    it("should handle initial state", () => {
        expect(minutes(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle radio button change", () => {
        const actual = minutes(initialState, setMinutesRadioButtonValue('Every 5 Minutes'));
        expect(actual.selectedRadio).toEqual('Every 5 Minutes');
    });

    const selectedOptions = [
        {name: 2, code: 2},
        {name: 3, code: 3}
    ];

    it("should handle option change", () => {
        const actual = minutes(initialState, setMinutesOptionValue(selectedOptions));
        expect(actual.selectedOption).toEqual(selectedOptions);
    });

    it("should handle 'hasError' value change", () => {
        const actual = minutes(initialState, setMinuteHasError(true));
        expect(actual.hasError).toEqual(true);
    });

});
