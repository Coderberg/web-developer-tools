import {
    SET_EPOCH_TO_DATE_RESULT,
    SET_UNIX_TIME_INPUT_VALUE
} from "../../constants/ActionTypes";
import {UnixTimeFormStateType} from "../../types/epochConverter";

const initialState: UnixTimeFormStateType = {
    unixTimeInputValue: '*',
    epochToDateResult: '',
}

const unixTimeForm = (state = initialState, action: { type: string; payload: string; }) => {

    switch (action.type) {

        case SET_UNIX_TIME_INPUT_VALUE: {
            return {
                ...state, unixTimeInputValue: action.payload
            };
        }
        case SET_EPOCH_TO_DATE_RESULT: {
            return {
                ...state, epochToDateResult: action.payload
            };
        }
        default:
            return state;
    }
}

export default unixTimeForm;
