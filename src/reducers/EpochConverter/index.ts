import { combineReducers } from 'redux'
import unixTimeForm from "./unixTimeForm";
import dateTimeForm from "./dateTimeForm";
import currentEpochTime from "./currentEpochTime";

const epochConverter = combineReducers({
    unixTimeForm,
    dateTimeForm,
    currentEpochTime,
})

export default epochConverter
