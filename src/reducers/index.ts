import { combineReducers } from 'redux'
import epochConverter from "./EpochConverter";
import chmodCalculator from "./ChmodCalculator";
import crontabGenerator from "./CrontabGenerator";
import passwordGenerator from "./PasswordGenerator";

const rootReducer = combineReducers({
    chmodCalculator,
    epochConverter,
    crontabGenerator,
    passwordGenerator
})

export default rootReducer
