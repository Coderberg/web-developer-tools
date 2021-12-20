import React from "react";

export type CheckboxesType = {
    [key: string]: boolean
    ownerRead: boolean,
    ownerWrite: boolean,
    ownerExecute: boolean,
    groupRead: boolean,
    groupWrite: boolean,
    groupExecute: boolean,
    othersRead: boolean,
    othersWrite: boolean,
    othersExecute: boolean,
}

export type ChmodCalculatorContainerStateType = {
    checked: CheckboxesType,
    numberFieldValue: string,
    textFieldValue: string,
}

export interface ChmodCalculatorContainerPropsInterface extends ChmodCalculatorContainerStateType {
    setCheckedValue: Function,
    setNumberValue: Function,
    setTextValue: Function
}

export interface ChmodCalculatorPropsInterface extends ChmodCalculatorContainerStateType {
    onCheckboxChange: Function,
    onNumberChange: React.ChangeEventHandler<HTMLInputElement>,
    onTextChange: React.ChangeEventHandler<HTMLInputElement>
}

export type CheckboxesPropsType = {
    checked: CheckboxesType,
    handleOnChange: any
}

export interface CheckboxGroupType extends CheckboxesPropsType {
    ownership: string
}

export interface CheckboxPropsType extends CheckboxGroupType {
    permission: string
}
