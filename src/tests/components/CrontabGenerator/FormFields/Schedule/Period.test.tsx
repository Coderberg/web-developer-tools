import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Period
    from "../../../../../components/CrontabGenerator/FormFields/Schedule/Period";
import {PeriodPropsInterface} from "../../../../../types/crontabGenerator";

const period: PeriodPropsInterface = {
    period: 'Days',
    options: Array.from(Array(31).keys(), n => n + 1),
    radioButtons: [
        'Every Day',
        'Even Days',
        'Odd Days',
        'Every 5 Days',
        'Every 10 Days',
        'Every Half Month',
    ],
    selectedRadio: 'Every 5 Days',
    selectedOption: [{name: '3', code: '3'}],
    hasError: false,
    onRadioButtonChange: jest.fn(),
    onOptionChange: jest.fn()
};

const setup = () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Period {...period} />)
}

describe('<Period/> component', () => {

    it('should render all radio buttons', () => {
        setup()
        period.radioButtons.forEach((item) => {
            expect(screen.getByLabelText(item)).toBeInTheDocument()
            if (item === period.selectedRadio) {
                expect(screen.getByLabelText(item)).toBeChecked();
            } else {
                expect(screen.getByLabelText(item)).toBeVisible();
                expect(screen.getByLabelText(item)).not.toBeChecked();
            }
        });
    });

    it('should simulate radio button change', () => {
        setup()
        const radioButton = screen.getByLabelText('Even Days')
        fireEvent.click(radioButton);
        expect(period.onRadioButtonChange).toBeCalledTimes(1)
    });

});
