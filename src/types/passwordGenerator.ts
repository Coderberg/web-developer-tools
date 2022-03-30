import {MouseEventHandler} from "react";

export type CheckboxesType = {
    [key: string]: boolean
    symbols: boolean,
    numbers: boolean,
    uppercase: boolean,
    lowercase: boolean,
    excludeSimilar: boolean
}

export type ActionButtonsType = {
    onGenerateButtonClick: MouseEventHandler<HTMLButtonElement>,
    onCopyButtonClick: MouseEventHandler<HTMLButtonElement>
}

export type CheckboxesPropsType = {
    checked: CheckboxesType,
    onCheckboxChange: any
}

export interface CheckboxPropsInterface extends CheckboxesPropsType {
    label: string,
    id: string
}

export interface PasswordGeneratorStateInterface {
    checked: CheckboxesType,
    passwordLength: string,
    copyToClipboardButtonState: 'default' | 'pressed',
    result: string
}

export interface GenerateAndCopyComponentProps extends ActionButtonsType {
    result: string,
    copyToClipboardButtonState: 'default' | 'pressed'
}

export interface PasswordGeneratorContainerStateInterface
    extends PasswordGeneratorStateInterface {
    setPasswordValue: Function,
    setPasswordLengthValue: Function,
    setChecked: Function,
    setCopyToClipboardButtonState: Function
}

export interface PasswordGeneratorPropsInterface
    extends PasswordGeneratorStateInterface,ActionButtonsType {
    onCheckboxChange: any,
    onPasswordLengthChange: Function
}
