import {
    UnixTimeFormStateType
} from "../../../types/epochConverter";
import unixTimeForm from "../../../reducers/EpochConverter/unixTimeForm";
import {
    setEpochToDateResult,
    setUnixTimeInputValue
} from "../../../actions/EpochConverter/unixTimeForm";

describe('unix time form reducer', () => {

    const initialState: UnixTimeFormStateType = {
        unixTimeInputValue: '*',
        epochToDateResult: '',
    }

    it("should handle initial state", () => {
        expect(unixTimeForm(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should unix time change", () => {
        const actual = unixTimeForm(initialState, setUnixTimeInputValue('1639937024'));
        expect(actual.unixTimeInputValue).toEqual('1639937024');
    });

    it("should handle result change", () => {
        const actual = unixTimeForm(initialState, setEpochToDateResult(new Date('December 22, 2021').toString()));
        expect(actual.epochToDateResult).toEqual(new Date('December 22, 2021').toString());
    });

});
