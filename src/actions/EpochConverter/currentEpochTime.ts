import {
    SET_CURRENT_UNIX_TIME,
    SET_COPY_TO_CLIPBOARD_BUTTON_STATE
} from "../../constants/ActionTypes";

export const setCurrentUnixTime = (payload: string) => ({
    type: SET_CURRENT_UNIX_TIME, payload
});

export const setCopyToClipboardButtonState = (payload: 'default' | 'pressed') => ({
    type: SET_COPY_TO_CLIPBOARD_BUTTON_STATE, payload
});
