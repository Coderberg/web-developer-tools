import weekday from "../../../../reducers/CrontabGenerator/Schedule/weekday";
import {
    setWeekdayHasError,
    setWeekdayOptionValue,
    setWeekdayRadioButtonValue
} from "../../../../actions/CrontabGenerator/Schedule/weekday";
import {PeriodContainerStateInterface} from "../../../../types/crontabGenerator";

describe('weekday reducer', () => {

    const initialState: PeriodContainerStateInterface = {
        selectedRadio: 'Every Weekday',
        selectedOption: [],
        hasError: false,
    }

    it("should handle initial state", () => {
        expect(weekday(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle radio button change", () => {
        const actual = weekday(initialState, setWeekdayRadioButtonValue('Weekend Days'));
        expect(actual.selectedRadio).toEqual('Weekend Days');
    });

    const selectedOptions = [
        {name: 'Sunday', code: 'Sunday'},
        {name: 'Monday', code: 'Monday'},
    ];

    it("should handle option change", () => {
        const actual = weekday(initialState, setWeekdayOptionValue(selectedOptions));
        expect(actual.selectedOption).toEqual(selectedOptions);
    });

    it("should handle 'hasError' value change", () => {
        const actual = weekday(initialState, setWeekdayHasError(true));
        expect(actual.hasError).toEqual(true);
    });

});
