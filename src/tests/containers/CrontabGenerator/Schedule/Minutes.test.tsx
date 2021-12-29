import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import React from "react";
import store from "../../../../store/configureStore";
import Minutes from "../../../../containers/CrontabGenerator/Schedule/Minutes";

const setup = () => {
    render(<Provider store={store}><Minutes/></Provider>)
}

it('should render all radio buttons', () => {
    setup();
    [
        'Every Minute',
        'Even Minutes',
        'Odd Minutes',
        'Every 5 Minutes',
        'Every 15 Minutes',
        'Every 30 Minutes',
    ].forEach((item) => {
        const radioButton = screen.getByLabelText(item);
        expect(radioButton).toBeVisible();
        if (item === 'Every Minute') {
            expect(radioButton).toBeChecked();
        } else {
            expect(radioButton).not.toBeChecked();
            fireEvent.click(radioButton);
            expect(radioButton).toBeChecked();
        }
    });
});
