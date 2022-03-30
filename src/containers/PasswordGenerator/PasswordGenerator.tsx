import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PasswordGeneratorComponent
    from "../../components/PasswordGenerator/PasswordGenerator";
import {
    setCheckedParam, setCopyToClipboardState, setPassword, setPasswordLength
} from "../../actions/PasswordGenerator/passwordGenerator";
import generatePassword from "../../utils/generators/passwordGenerator";
import {
    CheckboxesType,
    PasswordGeneratorContainerStateInterface
} from "../../types/passwordGenerator";
import isChangeAllowed from "../../utils/validators/passwordValidator";

const PasswordGenerator = ({
                               result,
                               checked,
                               passwordLength,
                               copyToClipboardButtonState,
                               setPasswordValue,
                               setPasswordLengthValue,
                               setChecked,
                               setCopyToClipboardButtonState
                           }: PasswordGeneratorContainerStateInterface) => {

    if (result === '') {
        setPasswordValue(generatePassword(passwordLength, checked))
    }

    const onCheckboxChange = (event: { target: { name: string; checked: boolean } }) => {
        const newCheckboxesState: CheckboxesType = {...checked};
        newCheckboxesState[event.target.name] = event.target.checked;
        if (isChangeAllowed(newCheckboxesState)) {
            setChecked(newCheckboxesState);
            setPasswordValue(generatePassword(passwordLength, newCheckboxesState));
        }
        setCopyToClipboardButtonState('default');
    }

    const onPasswordLengthChange = (event: { value: string; }) => {
        setPasswordLengthValue(event.value);
        setCopyToClipboardButtonState('default');
        if (event.value !== passwordLength) {
            setPasswordValue(generatePassword(event.value, checked));
        }
    }

    const onCopyButtonClick = () => {
        navigator.clipboard.writeText(result);
        setCopyToClipboardButtonState('pressed');
    }

    const onGenerateButtonClick = () => {
        setPasswordValue(generatePassword(passwordLength, checked));
        setCopyToClipboardButtonState('default');
    }

    return <PasswordGeneratorComponent
        result={result}
        checked={checked}
        passwordLength={passwordLength}
        copyToClipboardButtonState={copyToClipboardButtonState}
        onCopyButtonClick={onCopyButtonClick}
        onGenerateButtonClick={onGenerateButtonClick}
        onCheckboxChange={onCheckboxChange}
        onPasswordLengthChange={onPasswordLengthChange}
    />
}

const mapStateToProps = (state: any) => ({
    result: state.passwordGenerator.result,
    checked: state.passwordGenerator.checked,
    passwordLength: state.passwordGenerator.passwordLength,
    copyToClipboardButtonState: state.passwordGenerator.copyToClipboardButtonState,
});

export default compose(
    connect(mapStateToProps, {
        setPasswordValue: setPassword,
        setPasswordLengthValue: setPasswordLength,
        setChecked: setCheckedParam,
        setCopyToClipboardButtonState: setCopyToClipboardState
    }))(PasswordGenerator);
