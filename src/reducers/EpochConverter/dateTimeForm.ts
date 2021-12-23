import {
    SET_DATE_TIME_INPUT_VALUE,
    SET_DATE_TIMEZONE_INPUT_VALUE,
    SET_DATE_TO_EPOCH_RESULT
} from "../../constants/ActionTypes";
import {DateTimeFormState} from "../../types/epochConverter";

const initialState: DateTimeFormState = {
    dateTimeInputValue: undefined,
    timezoneInputValue: 'local',
    dateToEpochResult: '',
}

const dateTimeForm = (state = initialState, action: { type: string; payload: string | Date | null; }) => {

    switch (action.type) {

        case SET_DATE_TIME_INPUT_VALUE: {
            return {
                ...state, dateTimeInputValue: action.payload
            };
        }
        case SET_DATE_TIMEZONE_INPUT_VALUE: {
            return {
                ...state, timezoneInputValue: action.payload
            };
        }
        case SET_DATE_TO_EPOCH_RESULT: {
            return {
                ...state, dateToEpochResult: action.payload
            };
        }
        default:
            return state;
    }
}

export default dateTimeForm;
