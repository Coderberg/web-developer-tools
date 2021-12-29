import transform from "../utils/transformers/humanReadableToCrontab";

const getMinutes = formState => [
    formState.minutes.selectedRadio,
    formState.minutes.selectedOption,
]

const getHours = formState => [
    formState.hours.selectedRadio,
    formState.hours.selectedOption,
]

const getDays = formState => [
    formState.days.selectedRadio,
    formState.days.selectedOption,
]

const getMonths = formState => [
    formState.months.selectedRadio,
    formState.months.selectedOption,
]

const getWeekday = formState => [
    formState.weekday.selectedRadio,
    formState.weekday.selectedOption,
]

const getCommandToExecute = formState =>
    formState.commandToExecute.commandToExecuteValue

const getWayToHandleOutput = formState => [
    formState.howToHandleOutput.howToHandleOutputValue,
    formState.howToHandleOutput.pathToFileValue,
    formState.howToHandleOutput.emailValue,
]

export const getResult = state =>
    state.crontabGenerator.generateCrontabLine.result

export const getFormState = state =>
    state.crontabGenerator

export const getCronExpression = formState => transform(
    ...getMinutes(formState),
    ...getHours(formState),
    ...getDays(formState),
    ...getMonths(formState),
    ...getWeekday(formState),
    getCommandToExecute(formState),
    ...getWayToHandleOutput(formState)
)
