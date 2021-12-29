import {
    SET_WEEKDAY_RADIO_BUTTON_VALUE,
    SET_WEEKDAY_OPTION_VALUE,
    SET_WEEKDAY_HAS_ERROR
} from "../../../constants/ActionTypes";

export const setWeekdayRadioButtonValue = (payload: string) => ({
    type: SET_WEEKDAY_RADIO_BUTTON_VALUE, payload
});

export const setWeekdayOptionValue = (payload: any[]) => ({
    type: SET_WEEKDAY_OPTION_VALUE, payload
});

export const setWeekdayHasError = (payload: boolean) => ({
    type: SET_WEEKDAY_HAS_ERROR, payload
});
