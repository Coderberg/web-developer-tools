import {CheckboxesType} from "../../types/passwordGenerator";

const generator = require('generate-password-browser');

const generatePassword = (length: string, options: CheckboxesType) => generator.generate({
    length: parseInt(length, 10),
    numbers: options.numbers,
    symbols: options.symbols,
    lowercase: options.lowercase,
    uppercase: options.uppercase,
    excludeSimilarCharacters: options.excludeSimilar
})

export default generatePassword;
