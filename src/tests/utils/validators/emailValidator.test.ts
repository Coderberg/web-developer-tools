import isEmailValid from "../../../utils/validators/emailValidator";

describe('validate email address', () => {

    const validValues = [
        'cgibbons1@wryzpro.com',
        'Timothy-SGray@yandex.com',
        'ReggieCNewberry@mail.ru',
        'Emily.KLewis@gmail.com',
        'CeceliaFThomas@r-hyta.com'
    ];

    validValues.forEach((email) => {
        test(`${email} is valid email`, () => {
            expect(isEmailValid(email)).toBe(true);
        });
    });

    const invalidValues = [
        'RobertRToliver@armyspy',
        'KirkAStewart_rhyta.com',
        'SarahVJeffreys@ya',
        '@gmail.com',
        '',
        'info@info',
        'EarlDMarquez@jourrapide.111'
    ];

    invalidValues.forEach((email) => {
        test(`${email} is invalid email`, () => {
            expect(isEmailValid(email)).toBe(false);
        });
    });

});
