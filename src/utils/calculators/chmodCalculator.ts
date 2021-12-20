import { CheckboxesType } from "../../types/chmodCalculator";

const matching: any = {
    0: '---',
    1: '--x',
    2: '-w-',
    3: '-wx',
    4: 'r--',
    5: 'r-x',
    6: 'rw-',
    7: 'rwx'
}

const digitToString = (digit: string): string => matching[digit];

const toDigit = (r: boolean, w: boolean, x: boolean): string => {
    const read = r ? 4 : 0;
    const write = w ? 2 : 0;
    const execute = x ? 1 : 0;

    return (read + write + execute).toString();
}

export const checkboxesToChmodNumber = (checked: CheckboxesType): string =>
    toDigit(checked.ownerRead, checked.ownerWrite, checked.ownerExecute)
    + toDigit(checked.groupRead, checked.groupWrite, checked.groupExecute)
    + toDigit(checked.othersRead, checked.othersWrite, checked.othersExecute)

export const chmodNumberToString = (number: string): string =>
    digitToString(number.charAt(0))
    + digitToString(number.charAt(1))
    + digitToString(number.charAt(2))

export const chmodStringToCheckboxes = (value: string): CheckboxesType => ({
    'ownerRead': value.charAt(0) === 'r',
    'ownerWrite': value.charAt(1) === 'w',
    'ownerExecute': value.charAt(2) === 'x',
    'groupRead': value.charAt(3) === 'r',
    'groupWrite': value.charAt(4) === 'w',
    'groupExecute': value.charAt(5) === 'x',
    'othersRead': value.charAt(6) === 'r',
    'othersWrite': value.charAt(7) === 'w',
    'othersExecute': value.charAt(8) === 'x',
})
