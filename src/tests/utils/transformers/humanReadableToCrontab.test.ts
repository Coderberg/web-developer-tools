import transform, {
    groupNumbers,
    isNumeric, transformPeriod, wordToNumber
} from "../../../utils/transformers/humanReadableToCrontab";

describe('isNumeric() function test', () => {

    const numericValues = ['0', '1', '2', '5', '8', '10', '17', '21', '30', '99'];
    const nonNumericValues = ['1st', '2am', '5pm', '8th', 'test10'];

    numericValues.forEach((string) => {
        test(`The string ${string} is valid numeric value`, () => {
            expect(isNumeric(string)).toBeTruthy();
        });
    });

    nonNumericValues.forEach((string) => {
        test(`The string ${string} is invalid numeric value`, () => {
            expect(isNumeric(string)).toBeFalsy();
        });
    });
});

describe('groupNumbers() function test', () => {

    const validPairs = [
        {
            input: ['0', '1', '2', '7', '5', '6', '11'],
            output: ['0-2', '5-7', '11']
        },
        {
            input: ['8', '12', '14', '1', '2', '7', '3', '5', '6', '11'],
            output: ['1-3', '5-8', '11-12', '14']
        }
    ];

    validPairs.forEach((pair) => {
        test(`Numbers are grouped correctly`, () => {
            expect(groupNumbers(pair.input)).toStrictEqual(pair.output);
        });
    });
});

describe('wordToNumber() function test', () => {

    const validPairs = [
        {input: 'Every Minute', output: '*'},
        {input: 'Every 15 Minutes', output: '*/15'},
        {input: 'Odd Hours', output: '1-23/2'},
        {input: 'Every Half Month', output: '*/15'},
        {input: 'Even Days', output: '*/2'},
        {input: 'Every 4 Months', output: '*/4'},
        {input: 'July', output: '7'},
        {input: 'Monday-Friday', output: '1-5'},
        {input: 'Weekend Days', output: '0,6'},
    ];

    validPairs.forEach((pair) => {
        test(`The word ${pair.input} is correctly transformed into number ${pair.output}`, () => {
            expect(wordToNumber(pair.input)).toStrictEqual(pair.output);
        });
    });
});

describe('transformPeriod() function test', () => {
    const validPairs = [
        {input: {radio: 'Even Minutes', options: []}, output: '*/2'},
        {input: {radio: 'Hours', options: []}, output: ''},
        {
            input: {
                radio: 'Minutes', options: [
                    {name: '0', code: '0'},
                    {name: '3', code: '3'},
                ]
            }, output: '0,3'
        },
        {input: {radio: 'Every 12 Hours', options: []}, output: '*/12'},
        {input: {radio: 'Every Day', options: []}, output: '*'},
        {
            input: {
                radio: 'Weekday', options: [
                    {name: 'Sunday', code: 'Sunday'},
                    {name: 'Monday', code: 'Monday'},
                    {name: 'Tuesday', code: 'Tuesday'},
                    {name: 'Wednesday', code: 'Wednesday'},
                    {name: 'Saturday', code: 'Saturday'},
                ]
            }, output: '0-3,6'
        },
    ];

    validPairs.forEach((pair) => {
        test(`The selected period is correctly transformed into crontab schedule`, () => {
            expect(transformPeriod(pair.input.radio, pair.input.options))
                .toStrictEqual(pair.output);
        });
    });
});

describe('transform() function test', () => {
    test(`The form data is correctly transformed into crontab expression`, () => {
        expect(transform('Every 5 Minutes', [],
            'Hours', [
                {name: '4am', code: '4am'},
                {name: '1pm', code: '1pm'},
                {name: '5am', code: '5am'},
                {name: 'Noon', code: 'Noon'},
                {name: '2pm', code: '2pm'},
            ],
            'Odd Days', [],
            'Months', [
                {name: 'May', code: 'May'},
                {name: 'April', code: 'April'},
            ],
            'Weekend Days', [],
            'mysqldump -u root -p db_name > /root/dump.sql',
            'mute', '', ''))
            .toStrictEqual(
                '*/5 4-5,12-14 1-31/2 4-5 0,6 mysqldump -u root -p db_name > /root/dump.sql >/dev/null 2>&1'
            );
    });

    test(`The form data is correctly transformed into crontab expression`, () => {
        expect(transform('Every Minute', [],
            'Every Hour', [],
            'Every Day', [],
            'Every Month', [],
            'Every Weekday', [],
            '/usr/bin/wget --spider "https://site.io/cron.php"',
            'file', '/root/cron.log', ''))
            .toStrictEqual(
                '* * * * * /usr/bin/wget --spider "https://site.io/cron.php" > /root/cron.log'
            );
    });

    test(`The form data is correctly transformed into crontab expression`, () => {
        expect(transform('Every 30 Minutes', [],
            'Every 6 Hours', [],
            'Every 5 Days', [],
            'Even Months', [],
            'Weekend Days', [],
            '/usr/bin/wget --spider "https://site.io/cron.php"',
            'email', '/root/cron.log', 'info@example.com'))
            .toStrictEqual(
                `MAILTO="info@example.com"
         */30 */6 */5 */2 0,6 /usr/bin/wget --spider "https://site.io/cron.php"`
            );
    });
});
