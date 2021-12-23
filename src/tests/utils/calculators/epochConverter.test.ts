import {epochToHumanReadableDate, humanReadableDateToEpoch} from "../../../utils/calculators/epochConverter";

const validPairs = [
    {humanDate: '1971-11-12T17:24:15', epoch: '58814655'},
    {humanDate: '1995-10-28T12:10:19', epoch: '814882219'},
    {humanDate: '2021-11-06T11:49:54', epoch: '1636199394'},
];

describe('human date to timestamp', () => {
    validPairs.forEach((pair) => {
        test(`The human readable date ${pair.humanDate} is correctly converted to ${pair.epoch}`, () => {
            const dateString = new Date(pair.humanDate).toString()
            expect(humanReadableDateToEpoch(dateString, 'gmt'))
                .toStrictEqual(pair.epoch);
        });
    });
});

describe('timestamp to human date', () => {
    validPairs.forEach((pair) => {
        test(`The timestamp ${pair.epoch} is correctly converted to ${pair.humanDate}`, () => {
            const expectedDate = new Date(pair.humanDate);
            const offset = expectedDate.getTimezoneOffset() * 60
            const date = new Date(epochToHumanReadableDate((Number(pair.epoch) + offset).toString()));
            expect(date).toStrictEqual(expectedDate);
        });
    });
});
