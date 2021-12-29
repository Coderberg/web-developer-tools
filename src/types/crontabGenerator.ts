import {MouseEventHandler} from "react";

export type MultiselectOption = {
    name: string,
    code: string
}

export type SelectedType = {
    selectedOption: MultiselectOption[],
    selectedRadio: string,
}

export type HowToHandleOutputContainerState = {
    howToHandleOutputValue: string,
    pathToFileValue: string,
    emailValue: string
}

export type GenerateCrontabLineProps = {
    result: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export interface HowToHandleOutputContainerProps extends HowToHandleOutputContainerState {
    setHowToHandleOutput: Function,
    setPathToFile: Function,
    setEmail: Function,
}

export interface PeriodContainerStateInterface extends SelectedType {
    hasError: boolean
}

export interface PeriodContainerPropsInterface extends PeriodContainerStateInterface {
    setRadioButtonValue: Function,
    setOptionValue: Function,
    setHasError: Function
}

export interface RadioButtonWithMultiSelectPropsInterface extends SelectedType {
    period: string,
    options: (string | number)[],
    onRadioButtonChange: any,
    onOptionChange: any
}

export type CommandToExecuteContainerState = {
    commandToExecuteValue: string,
    commandHasError: boolean,
}

export interface CommandToExecutePropsInterface extends CommandToExecuteContainerState {
    onCommandToExecuteChange: any
}

export interface CommandToExecuteContainerPropsInterface extends CommandToExecuteContainerState {
    setCommandToExecute: Function,
    setCommandHasErrorValue: Function
}

export type RadioButtonListProps = {
    radioButtons: string[],
    selectedRadio: string ,
    onRadioButtonChange: any
}

export type HowToHandleOutputProps = {
    selectedRadio: string,
    pathToFileValue: string,
    emailValue: string,
    onRadioButtonChange: any,
    onPathToFileChange: any,
    onEmailChange: any
}

export type FileOrEmailProps = {
    name: string,
    label: string,
    radioButtonValue: string,
    textInputValue: string,
    radioButtonOnChange: any,
    textInputOnChange: any
}

export type GenerateCrontabLineContainerState = {
    formState: any,
    result: string,
    setResultValue: Function,
    setMinuteError: Function,
    setHourError: Function,
    setDayError: Function,
    setMonthError: Function,
    setWeekdayError: Function,
    setCommandError: Function
}

export interface PeriodPropsInterface extends RadioButtonWithMultiSelectPropsInterface {
    radioButtons: string[],
    hasError: boolean
}
