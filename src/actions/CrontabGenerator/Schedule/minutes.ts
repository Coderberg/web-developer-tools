import {
    SET_MINUTES_RADIO_BUTTON_VALUE,
    SET_MINUTES_OPTION_VALUE,
    SET_MINUTE_HAS_ERROR
} from "../../../constants/ActionTypes";

export const setMinutesRadioButtonValue = (payload: string) => ({
    type: SET_MINUTES_RADIO_BUTTON_VALUE, payload
});

export const setMinutesOptionValue = (payload: any[]) => ({
    type: SET_MINUTES_OPTION_VALUE, payload
});

export const setMinuteHasError = (payload: boolean) => ({
    type: SET_MINUTE_HAS_ERROR, payload
});
