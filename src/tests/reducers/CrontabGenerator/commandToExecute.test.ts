import commandToExecute
    from "../../../reducers/CrontabGenerator/commandToExecute";
import {
    setCommandHasError,
    setCommandToExecuteValue
} from "../../../actions/CrontabGenerator/commandToExecute";
import {CommandToExecuteContainerState} from "../../../types/crontabGenerator";

describe('commandToExecute reducer', () => {

    const initialState: CommandToExecuteContainerState = {
        commandToExecuteValue: '',
        commandHasError: false,
    }

    it("should handle initial state", () => {
        expect(commandToExecute(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle command change", () => {
        const command = '/usr/bin/php /var/www/laravel/artisan schedule:run';
        const actual = commandToExecute(initialState, setCommandToExecuteValue(command));
        expect(actual.commandToExecuteValue).toEqual(command);
    });

    it("should handle 'commandHasError' value change", () => {
        const actual = commandToExecute(initialState, setCommandHasError(true));
        expect(actual.commandHasError).toEqual(true);
    });
})
