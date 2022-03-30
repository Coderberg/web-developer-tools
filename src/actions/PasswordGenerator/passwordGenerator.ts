import {
    SET_PASSWORD,
    SET_PASSWORD_LENGTH,
    SET_CHECKED_PARAM,
    SET_COPY_TO_CLIPBOARD_STATE,
} from "../../constants/ActionTypes";
import {CheckboxesType} from "../../types/passwordGenerator";

export const setPassword = (payload: string) => ({
    type: SET_PASSWORD, payload
});

export const setPasswordLength = (payload: string) => ({
    type: SET_PASSWORD_LENGTH, payload
});

export const setCheckedParam = (payload: CheckboxesType) => ({
    type: SET_CHECKED_PARAM, payload
});

export const setCopyToClipboardState = (payload: 'default' | 'pressed') => ({
    type: SET_COPY_TO_CLIPBOARD_STATE, payload
});
