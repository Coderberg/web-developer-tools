import {
    SET_WEEKDAY_RADIO_BUTTON_VALUE,
    SET_WEEKDAY_OPTION_VALUE,
    SET_WEEKDAY_HAS_ERROR
} from "../../../constants/ActionTypes";
import {PeriodContainerStateInterface} from "../../../types/crontabGenerator";

const initialState: PeriodContainerStateInterface = {
    selectedRadio: 'Every Weekday',
    selectedOption: [],
    hasError: false,
}

const weekday = (state = initialState, action: { type: string; payload: any; }) => {

    switch (action.type) {

        case SET_WEEKDAY_RADIO_BUTTON_VALUE: {
            return {
                ...state, selectedRadio: action.payload
            };
        }
        case SET_WEEKDAY_OPTION_VALUE: {
            return {
                ...state, selectedOption: action.payload
            };
        }
        case SET_WEEKDAY_HAS_ERROR: {
            return {
                ...state, hasError: action.payload
            };
        }
        default:
            return state;
    }
}

export default weekday;
