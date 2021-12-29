import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import React from "react";
import store from "../../../../store/configureStore";
import Days from "../../../../containers/CrontabGenerator/Schedule/Days";

const setup = () => {
    render(<Provider store={store}><Days/></Provider>)
}

it('should render all radio buttons', () => {
    setup();
    [
        'Every Day',
        'Even Days',
        'Odd Days',
        'Every 5 Days',
        'Every 10 Days',
        'Every Half Month',
    ].forEach((item) => {
        const radioButton = screen.getByLabelText(item);
        expect(radioButton).toBeVisible();
        if (item === 'Every Day') {
            expect(radioButton).toBeChecked();
        } else {
            expect(radioButton).not.toBeChecked();
            fireEvent.click(radioButton);
            expect(radioButton).toBeChecked();
        }
    });
});
