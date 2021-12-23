import {
    SET_DATE_TIME_INPUT_VALUE,
    SET_DATE_TIMEZONE_INPUT_VALUE,
    SET_DATE_TO_EPOCH_RESULT
} from "../../constants/ActionTypes";

export const setDateTimeInputValue = (payload: Date) => ({
    type: SET_DATE_TIME_INPUT_VALUE, payload
});

export const setTimezoneInputValue = (payload: 'local' | 'gmt') => ({
    type: SET_DATE_TIMEZONE_INPUT_VALUE, payload
});

export const setDateToEpochResult = (payload: string) => ({
    type: SET_DATE_TO_EPOCH_RESULT, payload
});
