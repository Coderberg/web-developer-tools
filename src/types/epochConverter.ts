import {MouseEventHandler} from "react";

export type UnixTimeFormStateType = {
    unixTimeInputValue: string,
    epochToDateResult: string
}

export type DateTimeFormState = {
    dateTimeInputValue: Date | Date[] | undefined;
    timezoneInputValue: 'gmt' | 'local';
    dateToEpochResult: string;
}

export interface DateTimeInputPropsInterface extends DateTimeFormState {
    onDateTimeChange: any;
    onTimezoneChange: any;
    onDateToEpochButtonClick: MouseEventHandler<HTMLButtonElement>;
}

export interface DateTimeFormContainerPropsInterface extends DateTimeFormState {
    setDateTimeInput: Function,
    setTimezoneInput: Function,
    setDateToEpochResultValue: Function,
}

export type CurrentEpochTimeContainerState = {
    currentUnixTime: string;
    copyToClipboardButtonState: 'default' | 'pressed';
}

export interface CurrentEpochTimeContainerPropsInterface extends CurrentEpochTimeContainerState {
    setCurrentUnixTimeValue: Function,
    setCopyToClipboardState: Function,
}

export type CopyToClipboardType = {
    copyToClipboard: MouseEventHandler<HTMLButtonElement>;
    copyToClipboardButtonState: 'default' | 'pressed';
}

export interface UnixTimeFormContainerPropsInterface extends UnixTimeFormStateType {
    setUnixTimeInput: Function,
    setEpochToDateResultValue: Function
}

export interface UnixTimeInputPropsInterface extends UnixTimeFormStateType {
    onUnixTimeChange: any,
    onEpochToDateButtonClick: MouseEventHandler<HTMLButtonElement>
}

export interface CurrentEpochTimeInterface extends CopyToClipboardType {
    currentUnixTime: string;
}
