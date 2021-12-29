import {
    SET_HOURS_RADIO_BUTTON_VALUE,
    SET_HOURS_OPTION_VALUE,
    SET_HOUR_HAS_ERROR
} from "../../../constants/ActionTypes";

export const setHoursRadioButtonValue = (payload: string) => ({
    type: SET_HOURS_RADIO_BUTTON_VALUE, payload
});

export const setHoursOptionValue = (payload: any[]) => ({
    type: SET_HOURS_OPTION_VALUE, payload
});

export const setHourHasError = (payload: boolean) => ({
    type: SET_HOUR_HAS_ERROR, payload
});
