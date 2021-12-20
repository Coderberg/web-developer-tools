import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    checkboxesToChmodNumber,
    chmodNumberToString,
    chmodStringToCheckboxes
} from "../../utils/calculators/chmodCalculator";
import {setChecked, setNumberFieldValue, setTextFieldValue} from "../../actions/ChmodCalculator/chmodCalculator";
import {isNumberValid, isStringValid} from "../../utils/validators/chmodValidator";
import Calculator from "../../components/ChmodCalculator/ChmodCalculator";
import {
    CheckboxesType,
    ChmodCalculatorContainerPropsInterface,
    ChmodCalculatorContainerStateType
} from "../../types/chmodCalculator";

const ChmodCalculator = ({
                             checked, numberFieldValue, textFieldValue,
                             setCheckedValue, setNumberValue, setTextValue
                         }: ChmodCalculatorContainerPropsInterface) => {

    const onCheckboxChange = (event: { target: { id: string; checked: boolean } }) => {

        const newCheckboxesState: CheckboxesType = {...checked};
        newCheckboxesState[event.target.id] = event.target.checked;

        // Update state
        setCheckedValue(newCheckboxesState);
        setNumberValue(checkboxesToChmodNumber(newCheckboxesState));
        setTextValue(chmodNumberToString(checkboxesToChmodNumber(newCheckboxesState)));
    }

    const onNumberChange = ({target: {value}}: { target: { value: string } }) => {
        if (!isNumberValid(value)) {
            return;
        }

        setNumberValue(value);

        if (value.length === 3) {
            const newCheckboxState = chmodStringToCheckboxes(chmodNumberToString(value));
            setCheckedValue(newCheckboxState);
            setTextValue(chmodNumberToString(value));
        }
    }

    const onTextChange = ({target: {value}}: { target: { value: string } }) => {
        if (!isStringValid(value)) {
            return;
        }

        setTextValue(value);

        if (value.length === 9) {
            const nexCheckboxState = chmodStringToCheckboxes(value);
            setCheckedValue(nexCheckboxState);
            setNumberValue(checkboxesToChmodNumber(nexCheckboxState));
        }
    }

    return <Calculator
        checked={checked}
        numberFieldValue={numberFieldValue}
        textFieldValue={textFieldValue}
        onCheckboxChange={onCheckboxChange}
        onNumberChange={onNumberChange}
        onTextChange={onTextChange}
    />
}

const mapStateToProps = (state: { chmodCalculator: ChmodCalculatorContainerStateType }) => ({
    checked: state.chmodCalculator.checked,
    numberFieldValue: state.chmodCalculator.numberFieldValue,
    textFieldValue: state.chmodCalculator.textFieldValue,
});

export default compose(
    connect(mapStateToProps, {
        setCheckedValue: setChecked,
        setNumberValue: setNumberFieldValue,
        setTextValue: setTextFieldValue
    }))(ChmodCalculator);
