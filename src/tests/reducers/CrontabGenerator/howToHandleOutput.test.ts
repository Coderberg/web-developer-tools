import howToHandleOutput
    from "../../../reducers/CrontabGenerator/howToHandleOutput";
import {
    setEmailValue,
    setHowToHandleOutputValue,
    setPathToFileValue
} from "../../../actions/CrontabGenerator/howToHandleOutput";
import {HowToHandleOutputContainerState} from "../../../types/crontabGenerator";

describe('howToHandleOutput reducer', () => {

    const initialState: HowToHandleOutputContainerState = {
        howToHandleOutputValue: 'mute',
        pathToFileValue: '',
        emailValue: '',
    }

    it("should handle initial state", () => {
        expect(howToHandleOutput(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle 'How to Handle Execution Output' value change", () => {
        const actual = howToHandleOutput(initialState, setHowToHandleOutputValue('email'));
        expect(actual.howToHandleOutputValue).toEqual('email');
    });

    it("should handle 'Path To File' value change", () => {
        const actual = howToHandleOutput(initialState, setPathToFileValue('cron.log'));
        expect(actual.pathToFileValue).toEqual('cron.log');
    });

    it("should handle email address change", () => {
        const actual = howToHandleOutput(initialState, setEmailValue('info@reactjs.org'));
        expect(actual.emailValue).toEqual('info@reactjs.org');
    });
})
