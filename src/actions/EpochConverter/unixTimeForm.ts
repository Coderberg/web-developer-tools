import {
    SET_EPOCH_TO_DATE_RESULT,
    SET_UNIX_TIME_INPUT_VALUE
} from "../../constants/ActionTypes";

export const setUnixTimeInputValue = (payload: string) => ({
    type: SET_UNIX_TIME_INPUT_VALUE, payload
});

export const setEpochToDateResult = (payload: string) => ({
    type: SET_EPOCH_TO_DATE_RESULT, payload
});
