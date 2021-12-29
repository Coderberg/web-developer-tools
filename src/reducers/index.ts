import { combineReducers } from 'redux'
import epochConverter from "./EpochConverter";
import chmodCalculator from "./ChmodCalculator";
import crontabGenerator from "./CrontabGenerator";

const rootReducer = combineReducers({
    chmodCalculator,
    epochConverter,
    crontabGenerator
})

export default rootReducer
