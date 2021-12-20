import {
    SET_CHECKED,
    SET_NUMBER_FIELD_VALUE,
    SET_TEXT_FIELD_VALUE
} from "../../constants/ActionTypes";
import {CheckboxesType} from "../../types/chmodCalculator";

export const setChecked = (payload: CheckboxesType) => ({
    type: SET_CHECKED, payload
});

export const setNumberFieldValue = (payload: string) => ({
    type: SET_NUMBER_FIELD_VALUE, payload
});

export const setTextFieldValue = (payload: string) => ({
    type: SET_TEXT_FIELD_VALUE, payload
});
