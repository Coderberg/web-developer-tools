import {
    DateTimeFormState
} from "../../../types/epochConverter";
import dateTimeForm from "../../../reducers/EpochConverter/dateTimeForm";
import {
    setDateTimeInputValue, setDateToEpochResult,
    setTimezoneInputValue
} from "../../../actions/EpochConverter/dateTimeForm";

describe('date time form reducer', () => {

    const initialState: DateTimeFormState = {
        dateTimeInputValue: undefined,
        timezoneInputValue: 'local',
        dateToEpochResult: '',
    }

    it("should handle initial state", () => {
        expect(dateTimeForm(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle date time change", () => {
        const actual = dateTimeForm(initialState, setDateTimeInputValue(new Date('December 22, 2021')));
        expect(actual.dateTimeInputValue).toEqual(new Date('December 22, 2021'));
    });

    it("should handle Timezone change", () => {
        const actual = dateTimeForm(initialState, setTimezoneInputValue('gmt'));
        expect(actual.timezoneInputValue).toEqual('gmt');
    });

    it("should handle result change", () => {
        const actual = dateTimeForm(initialState, setDateToEpochResult('1639935411'));
        expect(actual.dateToEpochResult).toEqual('1639935411');
    });

});
