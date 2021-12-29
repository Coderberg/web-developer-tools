import {MultiselectOption} from "../../types/crontabGenerator";
import isEmailValid from "../validators/emailValidator";

const map = require('./map.json');

export const isNumeric = (string: string): boolean => /^-?\d+$/.test(string)

export const wordToNumber = (string: string): string => {
    if (isNumeric(string)) {
        return string;
    }

    // @ts-ignore
    return map[string];
}

const getRanges = (array: any[]): any[] => {
    const ranges = [];
    let start;
    let end;
    for (let i = 0; i < array.length; i += 1) {
        start = array[i];
        end = start;
        while (array[i + 1] - array[i] === 1) {
            end = array[i + 1];
            i += 1;
        }
        ranges.push(start === end ? `${start}` : `${start}-${end}`);
    }
    return ranges;
}

export const groupNumbers = (array: string[]): any[] => {

    const arrayOfNumbers = array.map(number => parseInt(number, 10))

    arrayOfNumbers.sort((a, b) => a - b);

    return getRanges(arrayOfNumbers);
}

const transformOptions = (optionValue: MultiselectOption[]): string => {

    const array: string[] = optionValue.map(item => wordToNumber(item.code));

    return groupNumbers(array).toString();
}

export const transformPeriod = (radioButtonValue: string, optionValue: any[]): string => {

    if (!['Minutes', 'Hours', 'Days', 'Months', 'Weekday'].includes(radioButtonValue)) {
        // @ts-ignore
        return map[radioButtonValue];
    }

    if (optionValue.length === 0) {
        return '';
    }

    return transformOptions(optionValue);
}

export const transform = (
    minutesRadio: string,
    minutesOptions: any[],
    hoursRadio: string,
    hoursOptions: any[],
    daysRadio: string,
    daysOptions: any[],
    monthsRadio: string,
    monthsOptions: any[],
    weekdayRadio: string,
    weekdayOptions: any[],
    command: string,
    output: string,
    path: string,
    email: string
): string => {
    const minutes = transformPeriod(minutesRadio, minutesOptions);
    const hours = transformPeriod(hoursRadio, hoursOptions);
    const days = transformPeriod(daysRadio, daysOptions);
    const months = transformPeriod(monthsRadio, monthsOptions);
    const weekday = transformPeriod(weekdayRadio, weekdayOptions);

    if (!minutes) return 'Invalid Minutes';
    if (!hours) return 'Invalid Hours';
    if (!days) return 'Invalid Days';
    if (!months) return 'Invalid Months';
    if (!weekday) return 'Invalid Weekday';
    if (!command) return 'Invalid Command';
    if (!isEmailValid(email) && output === 'email') return 'Invalid Email';
    if (!path && output === 'file') return 'Invalid Path';

    let wayToHandleOutput;

    if (output === 'mute') {
        wayToHandleOutput = '>/dev/null 2>&1';
    } else if (output === 'file') {
        wayToHandleOutput = `> ${path}`;
    } else if (output === 'email') {
        wayToHandleOutput = `MAILTO="${email}"
        `;
    }

    const expression = `${output === 'email' ? wayToHandleOutput : ''} ` +
        `${minutes} ${hours} ${days} ${months} ${weekday} ` +
        `${command} ${output !== 'email' ? wayToHandleOutput : ''}`;

    return expression.trim()
}

export default transform;
