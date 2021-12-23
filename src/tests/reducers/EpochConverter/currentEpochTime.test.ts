import currentEpochTime
    from "../../../reducers/EpochConverter/currentEpochTime";
import {
    setCopyToClipboardButtonState,
    setCurrentUnixTime
} from "../../../actions/EpochConverter/currentEpochTime";
import {CurrentEpochTimeContainerState} from "../../../types/epochConverter";

describe('current epoch time reducer', () => {

    const initialState: CurrentEpochTimeContainerState = {
        currentUnixTime: '',
        copyToClipboardButtonState: 'default',
    }

    it("should handle initial state", () => {
        expect(currentEpochTime(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle current unix time change", () => {
        const actual = currentEpochTime(initialState, setCurrentUnixTime('1639934047'));
        expect(actual.currentUnixTime).toEqual('1639934047');
    });

    it("should handle 'copy to clipboard' button state change", () => {
        const actual = currentEpochTime(initialState, setCopyToClipboardButtonState('pressed'));
        expect(actual.copyToClipboardButtonState).toEqual('pressed');
    });

});
