import {
    SET_CURRENT_UNIX_TIME,
    SET_COPY_TO_CLIPBOARD_BUTTON_STATE
} from "../../constants/ActionTypes";
import {CurrentEpochTimeContainerState} from "../../types/epochConverter";

const initialState: CurrentEpochTimeContainerState = {
    currentUnixTime: '',
    copyToClipboardButtonState: 'default',
}

const currentEpochTime = (state = initialState, action: { type: string; payload: string; }) => {

    switch (action.type) {

        case SET_CURRENT_UNIX_TIME: {
            return {
                ...state, currentUnixTime: action.payload
            };
        }
        case SET_COPY_TO_CLIPBOARD_BUTTON_STATE: {
            return {
                ...state, copyToClipboardButtonState: action.payload
            };
        }
        default:
            return state;
    }
}

export default currentEpochTime;
