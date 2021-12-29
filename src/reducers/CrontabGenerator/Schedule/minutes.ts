import {
    SET_MINUTES_RADIO_BUTTON_VALUE,
    SET_MINUTES_OPTION_VALUE,
    SET_MINUTE_HAS_ERROR
} from "../../../constants/ActionTypes";
import {PeriodContainerStateInterface} from "../../../types/crontabGenerator";

const initialState: PeriodContainerStateInterface = {
    selectedRadio: 'Every Minute',
    selectedOption: [],
    hasError: false,
}

const minutes = (state = initialState, action: { type: string; payload: any; }) => {

    switch (action.type) {

        case SET_MINUTES_RADIO_BUTTON_VALUE: {
            return {
                ...state, selectedRadio: action.payload
            };
        }
        case SET_MINUTES_OPTION_VALUE: {
            return {
                ...state, selectedOption: action.payload
            };
        }
        case SET_MINUTE_HAS_ERROR: {
            return {
                ...state, hasError: action.payload
            };
        }
        default:
            return state;
    }
}

export default minutes;
