import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import GenerateAndCopy
    from "../../../components/PasswordGenerator/GenerateAndCopy";

const onGenerateButtonClick = jest.fn();
const onCopyButtonClick = jest.fn();
const password = "yUTBDPggki";

const setup = () => {
    render(<GenerateAndCopy
        result={password}
        copyToClipboardButtonState="default"
        onGenerateButtonClick={onGenerateButtonClick}
        onCopyButtonClick={onCopyButtonClick}
    />)
}

describe('<GenerateAndCopy/> component', () => {

    it('shows the password', () => {
        setup();
        expect(screen.getByText(password)).toBeVisible();
    });

    it('should handle Copy button click', () => {
        setup();
        const button = screen.getByText('Copy');
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

});
