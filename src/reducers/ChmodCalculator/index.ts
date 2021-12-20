import {
    SET_CHECKED,
    SET_NUMBER_FIELD_VALUE,
    SET_TEXT_FIELD_VALUE
} from "../../constants/ActionTypes";
import {
    CheckboxesType,
    ChmodCalculatorContainerStateType
} from "../../types/chmodCalculator";

const initialState: ChmodCalculatorContainerStateType = {
    checked: {
        ownerRead: false,
        ownerWrite: false,
        ownerExecute: false,
        groupRead: false,
        groupWrite: false,
        groupExecute: false,
        othersRead: false,
        othersWrite: false,
        othersExecute: false,
    },
    numberFieldValue: '000',
    textFieldValue: '---------'
}

const chmodCalculator = (state = initialState, action: { type: string; payload: CheckboxesType | string }) => {

    switch (action.type) {

        case SET_CHECKED: {
            return {
                ...state, checked: action.payload
            };
        }
        case SET_NUMBER_FIELD_VALUE: {
            return {
                ...state, numberFieldValue: action.payload
            };
        }
        case SET_TEXT_FIELD_VALUE: {
            return {
                ...state, textFieldValue: action.payload
            };
        }
        default:
            return state;
    }
}

export default chmodCalculator;
