import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import React from "react";
import store from "../../../../store/configureStore";
import Weekday from "../../../../containers/CrontabGenerator/Schedule/Weekday";

const setup = () => {
    render(<Provider store={store}><Weekday/></Provider>)
}

it('should render all radio buttons', () => {
    setup();
    [
        'Every Weekday',
        'Monday-Friday',
        'Weekend Days',
    ].forEach((item) => {
        const radioButton = screen.getByLabelText(item);
        expect(radioButton).toBeVisible();
        if (item === 'Every Weekday') {
            expect(radioButton).toBeChecked();
        } else {
            expect(radioButton).not.toBeChecked();
            fireEvent.click(radioButton);
            expect(radioButton).toBeChecked();
        }
    });
});

it('should render multiselect', () => {
    setup();
    const input = screen.getByText('Custom period');
    expect(input).toBeVisible();
})
