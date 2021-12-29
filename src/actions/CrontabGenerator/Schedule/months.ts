import {
    SET_MONTHS_RADIO_BUTTON_VALUE,
    SET_MONTHS_OPTION_VALUE,
    SET_MONTH_HAS_ERROR
} from "../../../constants/ActionTypes";

export const setMonthsRadioButtonValue = (payload: string) => ({
    type: SET_MONTHS_RADIO_BUTTON_VALUE, payload
});

export const setMonthsOptionValue = (payload: any[]) => ({
    type: SET_MONTHS_OPTION_VALUE, payload
});

export const setMonthHasError = (payload: boolean) => ({
    type: SET_MONTH_HAS_ERROR, payload
});
