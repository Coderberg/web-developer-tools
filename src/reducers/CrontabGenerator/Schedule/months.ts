import {
    SET_MONTHS_RADIO_BUTTON_VALUE,
    SET_MONTHS_OPTION_VALUE,
    SET_MONTH_HAS_ERROR
} from "../../../constants/ActionTypes";
import {PeriodContainerStateInterface} from "../../../types/crontabGenerator";

const initialState: PeriodContainerStateInterface = {
    selectedRadio: 'Every Month',
    selectedOption: [],
    hasError: false,
}

const months = (state = initialState, action: { type: string; payload: any; }) => {

    switch (action.type) {

        case SET_MONTHS_RADIO_BUTTON_VALUE: {
            return {
                ...state, selectedRadio: action.payload
            };
        }
        case SET_MONTHS_OPTION_VALUE: {
            return {
                ...state, selectedOption: action.payload
            };
        }
        case SET_MONTH_HAS_ERROR: {
            return {
                ...state, hasError: action.payload
            };
        }
        default:
            return state;
    }
}

export default months;
