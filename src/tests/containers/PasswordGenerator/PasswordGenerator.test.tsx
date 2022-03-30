import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import store from "../../../store/configureStore";
import PasswordGenerator
    from "../../../containers/PasswordGenerator/PasswordGenerator";

const setup = () => {
    render(<Provider store={store}><PasswordGenerator/></Provider>);
}

describe('<PasswordGenerator/> container', () => {

    it('shows the slider title', () => {
        setup();
        expect(screen.getByText(/Password Length:/i)).toBeVisible();
    });

    it('shows the password length', () => {
        setup();
        expect(screen.getByText(/16/i)).toBeVisible();
    });

    it('should handle button click actions', () => {
        setup();
        Object.defineProperty(navigator, "clipboard", {
            value: {
                writeText: () => {
                },
            },
        });
        const button = screen.getByText('Copy');
        expect(button).toBeVisible();
        fireEvent.click(button);
        expect(screen.getByText('Copied')).toBeVisible();
        const generateButton = screen.getByText('Generate');
        fireEvent.click(generateButton);
        expect(screen.getByText('Copy')).toBeVisible();
    });

    it('shows the unchecked checkbox', () => {
        setup();
        const checkbox = screen.getByLabelText('Exclude Similar Characters');
        expect(checkbox).toBeVisible();
        expect(checkbox).not.toBeChecked();
    });

    it('should handle checkbox click action', () => {
        setup();
        const checkbox = screen.getByLabelText('Exclude Similar Characters');
        fireEvent.click(checkbox);
        expect(screen.getByLabelText('Exclude Similar Characters')).toBeChecked();
    })
})
