import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import PasswordGenerator
    from "../../../components/PasswordGenerator/PasswordGenerator";

const password = 'esn73uctzv2pyk8f';
const checked = {
    symbols: false,
    numbers: false,
    uppercase: true,
    lowercase: false,
    excludeSimilar: true
};
const onCopyButtonClick = jest.fn();
const onGenerateButtonClick = jest.fn();
const onCheckboxChange = jest.fn();
const onPasswordLengthChange = jest.fn();

const setup = () => {
    render(<PasswordGenerator
        result={password}
        checked={checked}
        passwordLength="17"
        copyToClipboardButtonState="pressed"
        onCopyButtonClick={onCopyButtonClick}
        onGenerateButtonClick={onGenerateButtonClick}
        onCheckboxChange={onCheckboxChange}
        onPasswordLengthChange={onPasswordLengthChange}
    />)
}

describe('<PasswordGenerator/> component', () => {

    it('shows the password', () => {
        setup();
        expect(screen.getByText(password)).toBeVisible();
    });

    it('shows the slider title', () => {
        setup();
        expect(screen.getByText(/Password Length:/i)).toBeVisible();
    });

    it('shows the password length', () => {
        setup();
        expect(screen.getByText(/17/i)).toBeVisible();
    });

    it('should handle Copy button click', () => {
        setup();
        const button = screen.getByText('Copied');
        expect(button).toBeVisible();
        fireEvent.click(button);
        expect(onCopyButtonClick).toBeCalledTimes(1)
    });

    it('should handle Generate button click', () => {
        setup();
        const button = screen.getByText('Generate');
        expect(button).toBeVisible();
        fireEvent.click(button);
        expect(onGenerateButtonClick).toBeCalledTimes(1)
    });

    it('shows the unchecked checkbox', () => {
        setup();
        const checkbox = screen.getByLabelText('Symbols');
        expect(checkbox).toBeVisible();
        expect(checkbox).not.toBeChecked();
    });

    it('should handle checkbox click action', () => {
        setup();
        const checkbox = screen.getByLabelText('Uppercase');
        fireEvent.click(checkbox);
        expect(onCheckboxChange).toBeCalledTimes(1)
    })
})
