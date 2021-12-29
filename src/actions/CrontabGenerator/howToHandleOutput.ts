import {
    HOW_TO_HANDLE_OUTPUT,
    SET_PATH_TO_FILE_VALUE,
    SET_EMAIL_VALUE
} from "../../constants/ActionTypes";

export const setHowToHandleOutputValue = (payload: 'mute' | 'file' | 'email') => ({
    type: HOW_TO_HANDLE_OUTPUT, payload
});

export const setPathToFileValue = (payload: string) => ({
    type: SET_PATH_TO_FILE_VALUE, payload
});

export const setEmailValue = (payload: string) => ({
    type: SET_EMAIL_VALUE, payload
});
