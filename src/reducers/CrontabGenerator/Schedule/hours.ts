import {
    SET_HOURS_RADIO_BUTTON_VALUE,
    SET_HOURS_OPTION_VALUE,
    SET_HOUR_HAS_ERROR
} from "../../../constants/ActionTypes";
import {PeriodContainerStateInterface} from "../../../types/crontabGenerator";

const initialState: PeriodContainerStateInterface = {
    selectedRadio: 'Every Hour',
    selectedOption: [],
    hasError: false,
}

const hours = (state = initialState, action: { type: string; payload: any; }) => {

    switch (action.type) {

        case SET_HOURS_RADIO_BUTTON_VALUE: {
            return {
                ...state, selectedRadio: action.payload
            };
        }
        case SET_HOURS_OPTION_VALUE: {
            return {
                ...state, selectedOption: action.payload
            };
        }
        case SET_HOUR_HAS_ERROR: {
            return {
                ...state, hasError: action.payload
            };
        }
        default:
            return state;
    }
}

export default hours;
