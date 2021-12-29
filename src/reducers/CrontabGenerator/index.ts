import { combineReducers } from 'redux'
import commandToExecute from "./commandToExecute";
import days from "./Schedule/days";
import generateCrontabLine from "./generateCrontabLine";
import hours from "./Schedule/hours";
import minutes from "./Schedule/minutes";
import months from "./Schedule/months";
import weekday from "./Schedule/weekday";
import howToHandleOutput from "./howToHandleOutput";

const crontabGenerator = combineReducers({
    commandToExecute,
    generateCrontabLine,
    howToHandleOutput,
    days,
    hours,
    minutes,
    months,
    weekday
})

export default crontabGenerator
