import {GENERATE_CRONTAB_LINE,} from "../../constants/ActionTypes";

const initialState = {
    result: '',
}

const generateCrontabLine = (state = initialState, action: { type: string; payload: string; }) => {

    switch (action.type) {

        case GENERATE_CRONTAB_LINE: {
            return {
                ...state, result: action.payload
            };
        }
        default:
            return state;
    }
}

export default generateCrontabLine;
