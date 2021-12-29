import {
    SET_COMMAND_TO_EXECUTE,
    SET_COMMAND_HAS_ERROR
} from "../../constants/ActionTypes";
import {CommandToExecuteContainerState} from "../../types/crontabGenerator";

const initialState: CommandToExecuteContainerState = {
    commandToExecuteValue: '',
    commandHasError: false,
}

const commandToExecute = (state = initialState,
                          action: { type: string; payload: string | boolean; }) => {

    switch (action.type) {

        case SET_COMMAND_TO_EXECUTE: {
            return {
                ...state, commandToExecuteValue: action.payload
            };
        }
        case SET_COMMAND_HAS_ERROR: {
            return {
                ...state, commandHasError: action.payload
            };
        }
        default:
            return state;
    }
}

export default commandToExecute;
