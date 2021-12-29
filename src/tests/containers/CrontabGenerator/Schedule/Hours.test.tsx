import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import React from "react";
import store from "../../../../store/configureStore";
import Hours from "../../../../containers/CrontabGenerator/Schedule/Hours";

const setup = () => {
    render(<Provider store={store}><Hours/></Provider>)
}

it('should render all radio buttons', () => {
    setup();
    [
        'Every Hour',
        'Even Hours',
        'Odd Hours',
        'Every 3 Hours',
        'Every 6 Hours',
        'Every 12 Hours',
    ].forEach((item) => {
        const radioButton = screen.getByLabelText(item);
        expect(radioButton).toBeVisible();
        if (item === 'Every Hour') {
            expect(radioButton).toBeChecked();
        } else {
            expect(radioButton).not.toBeChecked();
            fireEvent.click(radioButton);
            expect(radioButton).toBeChecked();
        }
    });
});
