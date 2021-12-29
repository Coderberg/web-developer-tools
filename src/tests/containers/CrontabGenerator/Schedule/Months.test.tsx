import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import React from "react";
import store from "../../../../store/configureStore";
import Months from "../../../../containers/CrontabGenerator/Schedule/Months";

const setup = () => {
    render(<Provider store={store}><Months/></Provider>)
}

it('should render all radio buttons', () => {
    setup();
    [
        'Every Month',
        'Even Months',
        'Odd Months',
        'Every 4 Months',
        'Every Half Year',
    ].forEach((item) => {
        const radioButton = screen.getByLabelText(item);
        expect(radioButton).toBeVisible();
        if (item === 'Every Month') {
            expect(radioButton).toBeChecked();
        } else {
            expect(radioButton).not.toBeChecked();
            fireEvent.click(radioButton);
            expect(radioButton).toBeChecked();
        }
    });
});
