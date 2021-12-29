import generateCrontabLine
    from "../../../reducers/CrontabGenerator/generateCrontabLine";
import setResult from "../../../actions/CrontabGenerator/generateCrontabLine";

describe('generateCrontabLine reducer', () => {

    const initialState = {
        result: '',
    }

    it("should handle initial state", () => {
        expect(generateCrontabLine(undefined, {
            type: "undefined",
            payload: ""
        })).toEqual(initialState);
    });

    it("should handle result change", () => {
        const result = '* * * * * /usr/bin/php /var/www/app/cron.php > crontab.log';
        const actual = generateCrontabLine(initialState, setResult(result));
        expect(actual.result).toEqual(result);
    });

})
