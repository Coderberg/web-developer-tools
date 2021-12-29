import {
    getCronExpression,
    getFormState,
    getResult
} from "../../selectors/crontabGenerator";

const state = {
    crontabGenerator: {
        minutes: {
            selectedRadio: "Odd Minutes",
            selectedOption: [],
            hasError: false,
        },
        hours: {
            selectedRadio: "Even Hours",
            selectedOption: [],
            hasError: false,
        },
        days: {
            selectedRadio: "Every 10 Days",
            selectedOption: [],
            hasError: false,
        },
        months: {
            selectedRadio: "Odd Months",
            selectedOption: [],
            hasError: false,
        },
        weekday: {
            selectedRadio: "Every Weekday",
            selectedOption: [],
            hasError: false,
        },
        commandToExecute: {
            commandHasError: false,
            commandToExecuteValue: "df -P ."
        },
        howToHandleOutput: {
            emailValue: "",
            howToHandleOutputValue: "file",
            pathToFileValue: "/root/crontab-log.txt"
        },
        generateCrontabLine: {
            result: ""
        }
    }
}

describe('crontab generator selectors', () => {
    it('it should return result', () => {
        expect(getResult(state)).toStrictEqual('');
    });

    it('it should return crontab expression', () => {
        expect(getCronExpression(getFormState(state))).toStrictEqual(
            '1-59/2 */2 */10 1-11/2 * df -P . > /root/crontab-log.txt'
        );
    });
});
