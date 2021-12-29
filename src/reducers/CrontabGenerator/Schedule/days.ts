import {
    SET_DAYS_RADIO_BUTTON_VALUE,
    SET_DAYS_OPTION_VALUE,
    SET_DAY_HAS_ERROR
} from "../../../constants/ActionTypes";
import {PeriodContainerStateInterface} from "../../../types/crontabGenerator";

const initialState: PeriodContainerStateInterface = {
    selectedRadio: 'Every Day',
    selectedOption: [],
    hasError: false,
}

const days = (state = initialState, action: { type: string; payload: any; }) => {

    switch (action.type) {

        case SET_DAYS_RADIO_BUTTON_VALUE: {
            return {
                ...state, selectedRadio: action.payload
            };
        }
        case SET_DAYS_OPTION_VALUE: {
            return {
                ...state, selectedOption: action.payload
            };
        }
        case SET_DAY_HAS_ERROR: {
            return {
                ...state, hasError: action.payload
            };
        }
        default:
            return state;
    }
}

export default days;
