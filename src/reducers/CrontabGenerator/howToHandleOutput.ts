import {
    HOW_TO_HANDLE_OUTPUT,
    SET_PATH_TO_FILE_VALUE,
    SET_EMAIL_VALUE
} from "../../constants/ActionTypes";
import {HowToHandleOutputContainerState} from "../../types/crontabGenerator";

const initialState: HowToHandleOutputContainerState = {
    howToHandleOutputValue: 'mute',
    pathToFileValue: '',
    emailValue: '',
}

const howToHandleOutput = (state = initialState, action: { type: string; payload: string; }) => {

    switch (action.type) {

        case HOW_TO_HANDLE_OUTPUT: {
            return {
                ...state, howToHandleOutputValue: action.payload
            };
        }
        case SET_PATH_TO_FILE_VALUE: {
            return {
                ...state, pathToFileValue: action.payload
            };
        }
        case SET_EMAIL_VALUE: {
            return {
                ...state, emailValue: action.payload
            };
        }
        default:
            return state;
    }
}

export default howToHandleOutput;
