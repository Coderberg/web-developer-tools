import hours from "../../../../reducers/CrontabGenerator/Schedule/hours";
import {
    setHourHasError,
    setHoursOptionValue,
    setHoursRadioButtonValue
} from "../../../../actions/CrontabGenerator/Schedule/hours";
import {PeriodContainerStateInterface} from "../../../../types/crontabGenerator";

describe('hours reducer', () => {

    const initialState: PeriodContainerStateInterface = {
        selectedRadio: 'Every Hour',
        selectedOption: [],
        hasError: false,
    }

    it("should handle initial state", () => {
        expect(hours(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle radio button change", () => {
        const actual = hours(initialState, setHoursRadioButtonValue('Even Hours'));
        expect(actual.selectedRadio).toEqual('Even Hours');
    });

    const selectedOptions = [
        {name: 'Midnight', code: 'Midnight'},
        {name: '5am', code: '5am'}
    ];

    it("should handle option change", () => {
        const actual = hours(initialState, setHoursOptionValue(selectedOptions));
        expect(actual.selectedOption).toEqual(selectedOptions);
    });

    it("should handle 'hasError' value change", () => {
        const actual = hours(initialState, setHourHasError(true));
        expect(actual.hasError).toEqual(true);
    });

});
