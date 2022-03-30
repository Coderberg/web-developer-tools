import {CheckboxesType} from "../../types/passwordGenerator";

const isChangeAllowed = (checked: CheckboxesType): boolean =>
    !(!checked.numbers
        && !checked.symbols
        && !checked.lowercase
        && !checked.uppercase)

export default isChangeAllowed;
