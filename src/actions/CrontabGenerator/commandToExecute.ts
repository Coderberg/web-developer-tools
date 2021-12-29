import {
    SET_COMMAND_TO_EXECUTE,
    SET_COMMAND_HAS_ERROR
} from "../../constants/ActionTypes";

export const setCommandToExecuteValue = (payload: string) => ({
    type: SET_COMMAND_TO_EXECUTE, payload
});

export const setCommandHasError = (payload: boolean) => ({
    type: SET_COMMAND_HAS_ERROR, payload
});
