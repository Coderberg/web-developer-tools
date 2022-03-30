import {
    SET_PASSWORD,
    SET_PASSWORD_LENGTH,
    SET_CHECKED_PARAM,
    SET_COPY_TO_CLIPBOARD_STATE,
} from "../../constants/ActionTypes";
import {
    CheckboxesType,
    PasswordGeneratorStateInterface
} from "../../types/passwordGenerator";

const initialState: PasswordGeneratorStateInterface = {
    checked: {
        symbols: true,
        numbers: true,
        uppercase: true,
        lowercase: true,
        excludeSimilar: false,
    },
    passwordLength: '16',
    copyToClipboardButtonState: 'default',
    result: '',
}

const passwordGenerator = (state = initialState, action: { type: string; payload: CheckboxesType | string }) => {

    switch (action.type) {
        case SET_PASSWORD: {
            return {
                ...state, result: action.payload
            };
        }
        case SET_PASSWORD_LENGTH: {
            return {
                ...state, passwordLength: action.payload
            };
        }
        case SET_CHECKED_PARAM: {
            return {
                ...state, checked: action.payload
            };
        }
        case SET_COPY_TO_CLIPBOARD_STATE: {
            return {
                ...state, copyToClipboardButtonState: action.payload
            };
        }
        default:
            return state;
    }
}

export default passwordGenerator;
