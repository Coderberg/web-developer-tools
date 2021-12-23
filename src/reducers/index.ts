import { combineReducers } from 'redux'
import chmodCalculator from "./ChmodCalculator";
import epochConverter from "./EpochConverter";

const rootReducer = combineReducers({
    chmodCalculator,
    epochConverter
})

export default rootReducer
