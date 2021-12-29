import {
    SET_DAYS_RADIO_BUTTON_VALUE,
    SET_DAYS_OPTION_VALUE,
    SET_DAY_HAS_ERROR
} from "../../../constants/ActionTypes";

export const setDaysRadioButtonValue = (payload: string) => ({
    type: SET_DAYS_RADIO_BUTTON_VALUE, payload
});

export const setDaysOptionValue = (payload: any[]) => ({
    type: SET_DAYS_OPTION_VALUE, payload
});

export const setDayHasError = (payload: boolean) => ({
    type: SET_DAY_HAS_ERROR, payload
});
